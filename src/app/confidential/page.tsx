export default function ConfidentialPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="max-w-xl text-center bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
          Restricted Access
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          These apps are confidential. You are currently unable to access this page.
        </p>
      </div>
    </div>
  );
}
