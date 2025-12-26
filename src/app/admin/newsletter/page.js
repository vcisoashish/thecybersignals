'use client';

import { useState, useEffect } from 'react';

export default function NewsletterAdmin() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    today: 0,
    thisWeek: 0,
    sources: {}
  });

  // In a real application, you would fetch this data from your database
  // For now, this is just a demo interface
  useEffect(() => {
    // Simulate fetching subscription data
    const mockData = [
      {
        id: 1,
        email: 'user1@example.com',
        name: 'John Doe',
        source: 'homepage-footer',
        timestamp: new Date().toISOString(),
        status: 'active'
      },
      {
        id: 2,
        email: 'user2@example.com',
        name: 'Jane Smith',
        source: 'channel-page',
        timestamp: new Date(Date.now() - 86400000).toISOString(),
        status: 'active'
      }
    ];

    setSubscriptions(mockData);
    setStats({
      total: mockData.length,
      today: mockData.filter(sub => 
        new Date(sub.timestamp).toDateString() === new Date().toDateString()
      ).length,
      thisWeek: mockData.filter(sub => 
        new Date(sub.timestamp) > new Date(Date.now() - 7 * 86400000)
      ).length,
      sources: mockData.reduce((acc, sub) => {
        acc[sub.source] = (acc[sub.source] || 0) + 1;
        return acc;
      }, {})
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Newsletter Subscriptions
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Manage and monitor your newsletter subscribers
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Total Subscribers
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {stats.total}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              New Today
            </h3>
            <p className="text-2xl font-bold text-green-600">
              {stats.today}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              This Week
            </h3>
            <p className="text-2xl font-bold text-blue-600">
              {stats.thisWeek}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Top Source
            </h3>
            <p className="text-sm font-bold text-gray-900 dark:text-white">
              {Object.keys(stats.sources)[0] || 'N/A'}
            </p>
          </div>
        </div>

        {/* Subscriptions Table */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
              Recent Subscriptions
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Subscriber
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Source
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {subscriptions.map((subscription) => (
                  <tr key={subscription.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {subscription.name || 'Anonymous'}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-300">
                          {subscription.email}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                        {subscription.source}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      {new Date(subscription.timestamp).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                        {subscription.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="text-lg font-medium text-blue-900 dark:text-blue-100 mb-2">
            Email Integration Setup
          </h3>
          <p className="text-blue-700 dark:text-blue-200 mb-4">
            To receive actual email notifications, integrate with an email service:
          </p>
          <ul className="list-disc list-inside text-blue-700 dark:text-blue-200 space-y-1">
            <li>SendGrid: Add API key to environment variables</li>
            <li>Mailgun: Configure domain and API credentials</li>
            <li>AWS SES: Set up AWS credentials and verify domain</li>
            <li>Nodemailer: Configure SMTP settings</li>
          </ul>
          <p className="text-blue-700 dark:text-blue-200 mt-4">
            All subscriptions are currently logged to console. Check your server logs for subscription data.
          </p>
        </div>
      </div>
    </div>
  );
}