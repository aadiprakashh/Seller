import React from 'react';
export default function Component() {
  return (
    <div dangerouslySetInnerHTML={{ __html: "&lt;html&gt;
&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
  &lt;title&gt;Seller&#39;s Dashboard&lt;/title&gt;
  &lt;link rel=&quot;preconnect&quot; href=&quot;https://fonts.googleapis.com&quot;&gt;
  &lt;link rel=&quot;preconnect&quot; href=&quot;https://fonts.gstatic.com&quot; crossorigin&gt;
  &lt;link href=&quot;https://fonts.googleapis.com/css2?family=Inter:wght@100..900&amp;display=swap&quot; rel=&quot;stylesheet&quot;&gt;
  &lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css&quot;&gt;
  &lt;script src=&quot;https://cdn.tailwindcss.com&quot;&gt;&lt;/script&gt;
  &lt;style&gt;
    body {
      font-family: &#39;Inter&#39;, sans-serif;
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body className=&quot;h-screen overflow-hidden bg-gray-100&quot;&gt;
  &lt;header className=&quot;fixed top-0 left-0 w-full h-16 bg-white shadow-md&quot;&gt;
    &lt;nav className=&quot;flex justify-between items-center h-full px-4&quot;&gt;
      &lt;div className=&quot;flex items-center&quot;&gt;
        &lt;img src=&quot;https://placehold.co/40x40&quot; alt=&quot;Seller Logo&quot; className=&quot;mr-2&quot;/&gt;
        &lt;span className=&quot;text-lg font-bold&quot;&gt;Seller&#39;s Dashboard&lt;/span&gt;
      &lt;/div&gt;
      &lt;ul className=&quot;flex items-center&quot;&gt;
        &lt;li className=&quot;mr-4&quot;&gt;
          &lt;a href=&quot;#&quot; className=&quot;text-gray-600 hover:text-gray-900 transition duration-300&quot;&gt;
            &lt;i className=&quot;fas fa-bell&quot;&gt;&lt;/i&gt;
          &lt;/a&gt;
        &lt;/li&gt;
        &lt;li className=&quot;mr-4&quot;&gt;
          &lt;a href=&quot;#&quot; className=&quot;text-gray-600 hover:text-gray-900 transition duration-300&quot;&gt;
            &lt;i className=&quot;fas fa-cog&quot;&gt;&lt;/i&gt;
          &lt;/a&gt;
        &lt;/li&gt;
        &lt;li&gt;
          &lt;a href=&quot;#&quot; className=&quot;text-gray-600 hover:text-gray-900 transition duration-300&quot;&gt;
            &lt;i className=&quot;fas fa-user&quot;&gt;&lt;/i&gt;
          &lt;/a&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
    &lt;/nav&gt;
  &lt;/header&gt;
  &lt;main className=&quot;pt-16 h-screen overflow-y-auto&quot;&gt;
    &lt;aside className=&quot;fixed top-16 left-0 w-64 bg-white shadow-md h-screen overflow-y-auto&quot;&gt;
      &lt;ul className=&quot;flex flex-col py-4&quot;&gt;
        &lt;li className=&quot;px-4 py-2 hover:bg-gray-100&quot;&gt;
          &lt;a href=&quot;#&quot; className=&quot;text-gray-600 hover:text-gray-900 transition duration-300&quot;&gt;
            &lt;i className=&quot;fas fa-chart-bar mr-2&quot;&gt;&lt;/i&gt; Analytics
          &lt;/a&gt;
        &lt;/li&gt;
        &lt;li className=&quot;px-4 py-2 hover:bg-gray-100&quot;&gt;
          &lt;a href=&quot;#&quot; className=&quot;text-gray-600 hover:text-gray-900 transition duration-300&quot;&gt;
            &lt;i className=&quot;fas fa-shopping-bag mr-2&quot;&gt;&lt;/i&gt; Orders
          &lt;/a&gt;
        &lt;/li&gt;
        &lt;li className=&quot;px-4 py-2 hover:bg-gray-100&quot;&gt;
          &lt;a href=&quot;#&quot; className=&quot;text-gray-600 hover:text-gray-900 transition duration-300&quot;&gt;
            &lt;i className=&quot;fas fa-box mr-2&quot;&gt;&lt;/i&gt; Products
          &lt;/a&gt;
        &lt;/li&gt;
        &lt;li className=&quot;px-4 py-2 hover:bg-gray-100&quot;&gt;
          &lt;a href=&quot;#&quot; className=&quot;text-gray-600 hover:text-gray-900 transition duration-300&quot;&gt;
            &lt;i className=&quot;fas fa-warehouse mr-2&quot;&gt;&lt;/i&gt; Inventory
          &lt;/a&gt;
        &lt;/li&gt;
        &lt;li className=&quot;px-4 py-2 hover:bg-gray-100&quot;&gt;
          &lt;a href=&quot;#&quot; className=&quot;text-gray-600 hover:text-gray-900 transition duration-300&quot;&gt;
            &lt;i className=&quot;fas fa-users mr-2&quot;&gt;&lt;/i&gt; Customers
          &lt;/a&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
    &lt;/aside&gt;
    &lt;div className=&quot;ml-64 p-4&quot;&gt;
      &lt;h1 className=&quot;text-2xl font-bold&quot;&gt;Dashboard&lt;/h1&gt;
      &lt;div className=&quot;flex justify-between items-center mb-4&quot;&gt;
        &lt;div className=&quot;bg-orange-100 p-4 rounded&quot;&gt;
          &lt;h2 className=&quot;text-lg font-bold&quot;&gt;Total Sales: $10,000&lt;/h2&gt;
          &lt;p className=&quot;text-gray-600&quot;&gt;Last 30 days&lt;/p&gt;
        &lt;/div&gt;
        &lt;div className=&quot;bg-green-100 p-4 rounded&quot;&gt;
          &lt;h2 className=&quot;text-lg font-bold&quot;&gt;Customer Count: 100&lt;/h2&gt;
          &lt;p className=&quot;text-gray-600&quot;&gt;Last 30 days&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div className=&quot;mb-4&quot;&gt;
        &lt;h2 className=&quot;text-lg font-bold&quot;&gt;Top Selling Products&lt;/h2&gt;
        &lt;ul className=&quot;flex flex-col&quot;&gt;
          &lt;li className=&quot;flex justify-between items-center py-2&quot;&gt;
            &lt;span className=&quot;text-gray-600&quot;&gt;Product 1&lt;/span&gt;
            &lt;span className=&quot;text-gray-600&quot;&gt;$1,000&lt;/span&gt;
          &lt;/li&gt;
          &lt;li className=&quot;flex justify-between items-center py-2&quot;&gt;
            &lt;span className=&quot;text-gray-600&quot;&gt;Product 2&lt;/span&gt;
            &lt;span className=&quot;text-gray-600&quot;&gt;$800&lt;/span&gt;
          &lt;/li&gt;
          &lt;li className=&quot;flex justify-between items-center py-2&quot;&gt;
            &lt;span className=&quot;text-gray-600&quot;&gt;Product 3&lt;/span&gt;
            &lt;span className=&quot;text-gray-600&quot;&gt;$600&lt;/span&gt;
          &lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
      &lt;div className=&quot;mb-4&quot;&gt;
        &lt;h2 className=&quot;text-lg font-bold&quot;&gt;Customer Insights&lt;/h2&gt;
        &lt;ul className=&quot;flex flex-col&quot;&gt;
          &lt;li className=&quot;flex justify-between items-center py-2&quot;&gt;
            &lt;span className=&quot;text-gray-600&quot;&gt;Average Order Value: $50&lt;/span&gt;
            &lt;span className=&quot;text-gray-600&quot;&gt;Last 30 days&lt;/span&gt;
          &lt;/li&gt;
          &lt;li className=&quot;flex justify-between items-center py-2&quot;&gt;
            &lt;span className=&quot;text-gray-600&quot;&gt;Customer Retention Rate: 80%&lt;/span&gt;
            &lt;span className=&quot;text-gray-600&quot;&gt;Last 30 days&lt;/span&gt;
          &lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/main&gt;
&lt;/body&gt;
&lt;/html&gt;" }} />
  );
}