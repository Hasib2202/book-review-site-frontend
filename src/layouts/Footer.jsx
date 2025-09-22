export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-auto">
      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Book Review Site. All rights reserved.
      </p>
    </footer>
  );
}
