import { blogs as allBlogs } from "@/.velite/generated";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import Categories from "@/src/components/Blog/Categories";
import { slug } from "github-slugger";
import Link from "next/link";
import NewsletterButton from "@/src/components/Newsletter/NewsletterButton";
<<<<<<< HEAD
import { getCleanBlogUrl } from "@/src/utils/urlMappings";
=======
>>>>>>> ad7c74605570f2289438cce6c385eca92034adfd

// const slugger = new GithubSlugger();

export async function generateStaticParams() {
  const categories = [];
  const paths = [{ slug: "all" }];

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        let slugified = slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}

export async function generateMetadata({ params }) {
  return {
    title: `${params.slug.replaceAll("-"," ")} Blogs`,
    description: `Learn more about ${params.slug === "all" ? "cybersecurity and technology" : params.slug} through our collection of expert blogs and tutorials`,
  };
}

// Blog Directory Component for "all" category
const BlogDirectory = ({ blogs }) => {
  // Sort blogs by publication date (most recent first)
  const sortedBlogs = blogs
<<<<<<< HEAD
    .filter(blog => blog && blog.isPublished && blog.publishedAt && blog.tags)
=======
    .filter(blog => blog.isPublished)
>>>>>>> ad7c74605570f2289438cce6c385eca92034adfd
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  // Group blogs by category
  const blogsByCategory = {};
  sortedBlogs.forEach(blog => {
<<<<<<< HEAD
    if (blog.tags && Array.isArray(blog.tags)) {
      blog.tags.forEach(tag => {
        if (tag) {
          const categorySlug = slug(tag);
          if (!blogsByCategory[categorySlug]) {
            blogsByCategory[categorySlug] = [];
          }
          if (!blogsByCategory[categorySlug].some(b => b.slug === blog.slug)) {
            blogsByCategory[categorySlug].push(blog);
          }
        }
      });
    }
=======
    blog.tags.forEach(tag => {
      const categorySlug = slug(tag);
      if (!blogsByCategory[categorySlug]) {
        blogsByCategory[categorySlug] = [];
      }
      if (!blogsByCategory[categorySlug].some(b => b.slug === blog.slug)) {
        blogsByCategory[categorySlug].push(blog);
      }
    });
>>>>>>> ad7c74605570f2289438cce6c385eca92034adfd
  });

  // Format date function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="px-5 sm:px-10 md:px-24 sxl:px-32">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
          Blog Directory
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Explore our comprehensive collection of cybersecurity insights, tutorials, and industry analysis. 
          Navigate through categories or browse chronologically to find exactly what you're looking for.
        </p>
        <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-8">
          <p className="text-sm text-accent font-medium">
<<<<<<< HEAD
            📚 Total Articles: {sortedBlogs.length} | 🏷️ Categories: {Object.keys(blogsByCategory).length} | 🔄 Updated: {sortedBlogs.length > 0 ? formatDate(sortedBlogs[0]?.publishedAt) : 'N/A'}
=======
            📚 Total Articles: {sortedBlogs.length} | 🏷️ Categories: {Object.keys(blogsByCategory).length} | 🔄 Updated: {formatDate(sortedBlogs[0]?.publishedAt)}
>>>>>>> ad7c74605570f2289438cce6c385eca92034adfd
          </p>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Quick Navigation</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {Object.keys(blogsByCategory).sort().map(category => (
            <Link 
              key={category}
              href={`/categories/${category}`}
              className="bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg p-3 hover:border-accent hover:bg-accent/5 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-sm capitalize group-hover:text-accent transition-colors">
                  {category.replace(/-/g, ' ')}
                </span>
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                  {blogsByCategory[category].length}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Articles Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Latest Articles</h2>
        <div className="space-y-4">
          {sortedBlogs.slice(0, 10).map((blog, index) => (
            <div key={blog.slug} className="bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all duration-200 group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                      #{index + 1}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {formatDate(blog.publishedAt)}
                    </span>
<<<<<<< HEAD
                    {blog.tags && blog.tags.slice(0, 2).map(tag => (
=======
                    {blog.tags.slice(0, 2).map(tag => (
>>>>>>> ad7c74605570f2289438cce6c385eca92034adfd
                      <Link 
                        key={tag}
                        href={`/categories/${slug(tag)}`}
                        className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded hover:bg-accent/10 hover:text-accent transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
<<<<<<< HEAD
                  <Link href={getCleanBlogUrl(blog.slug)} className="group-hover:text-accent transition-colors">
=======
                  <Link href={`/blogs/${blog.slug}`} className="group-hover:text-accent transition-colors">
>>>>>>> ad7c74605570f2289438cce6c385eca92034adfd
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                      {blog.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-3">
                    {blog.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
<<<<<<< HEAD
                    <span>By {blog.author || 'The Cyber Signals'}</span>
=======
                    <span>By {blog.author}</span>
>>>>>>> ad7c74605570f2289438cce6c385eca92034adfd
                    <span>•</span>
                    <span>5 min read</span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Link 
<<<<<<< HEAD
                    href={getCleanBlogUrl(blog.slug)}
=======
                    href={`/blogs/${blog.slug}`}
>>>>>>> ad7c74605570f2289438cce6c385eca92034adfd
                    className="inline-flex items-center px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors text-sm font-medium"
                  >
                    Read Article →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Articles by Category */}
      <div className="space-y-12">
        {Object.entries(blogsByCategory)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([category, categoryBlogs]) => (
            <div key={category} className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold capitalize">
                  {category.replace(/-/g, ' ')} 
                  <span className="text-sm font-normal text-gray-500 ml-2">
                    ({categoryBlogs.length} articles)
                  </span>
                </h2>
                <Link 
                  href={`/categories/${category}`}
                  className="text-accent hover:text-accent/80 text-sm font-medium"
                >
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryBlogs.slice(0, 6).map(blog => (
                  <div key={blog.slug} className="bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:border-accent hover:shadow-lg transition-all duration-200 group">
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {formatDate(blog.publishedAt)}
                        </span>
                      </div>
<<<<<<< HEAD
                      <Link href={getCleanBlogUrl(blog.slug)} className="group-hover:text-accent transition-colors">
=======
                      <Link href={`/blogs/${blog.slug}`} className="group-hover:text-accent transition-colors">
>>>>>>> ad7c74605570f2289438cce6c385eca92034adfd
                        <h3 className="font-semibold mb-2 line-clamp-2 text-sm">
                          {blog.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 dark:text-gray-300 text-xs line-clamp-3 mb-3">
                        {blog.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
<<<<<<< HEAD
                          By {blog.author || 'The Cyber Signals'}
                        </span>
                        <Link 
                          href={getCleanBlogUrl(blog.slug)}
=======
                          By {blog.author}
                        </span>
                        <Link 
                          href={`/blogs/${blog.slug}`}
>>>>>>> ad7c74605570f2289438cce6c385eca92034adfd
                          className="text-xs text-accent hover:text-accent/80 font-medium"
                        >
                          Read →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-16 text-center bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg p-8">
        <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Get the latest cybersecurity insights delivered to your inbox
        </p>
        <NewsletterButton 
          className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent/90 transition-colors"
          text="Subscribe to Newsletter"
          source="categories-page"
          showInput={true}
          inputPlaceholder="Enter your email for updates"
        />
      </div>
    </div>
  );
};

const CategoryPage = ({ params }) => {
// Separating logic to create list of categories from all blogs
const allCategories = ["all"]; // Initialize with 'all' category
allBlogs.forEach(blog => {
  if (blog && blog.tags && Array.isArray(blog.tags)) {
    blog.tags.forEach(tag => {
      if (tag) {
        const slugified = slug(tag);
        if (!allCategories.includes(slugified)) {
          allCategories.push(slugified);
        }
      }
    });
  }
});

// Sort allCategories to ensure they are in alphabetical order
allCategories.sort();

// Step 2: Filter blogs based on the current category (params.slug)
const blogs = allBlogs.filter(blog => {
  // Add safety checks for blog properties
  if (!blog || !blog.tags || !Array.isArray(blog.tags)) {
    return false;
  }
  
  if (params.slug === "all") {
    return blog.isPublished !== false; // Include all published blogs
  }
  return blog.tags.some(tag => slug(tag) === params.slug);
});

  // Special handling for "all" category - show blog directory
  if (params.slug === "all") {
    return (
      <article className="mt-12 flex flex-col text-dark dark:text-light">
        <BlogDirectory blogs={allBlogs} />
      </article>
    );
  }

  // Regular category page layout for other categories
  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className=" px-5 sm:px-10  md:px-24  sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">#{params.slug}</h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={params.slug} />

      <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
        {blogs.map((blog, index) => {
          // Add safety check for blog object
          if (!blog || !blog.title || !blog.slug) {
            return null;
          }
          
          return (
            <article key={blog.slug || index} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree blog={blog} />
            </article>
          );
        })}
      </div>
    </article>
  );
};

export default CategoryPage;