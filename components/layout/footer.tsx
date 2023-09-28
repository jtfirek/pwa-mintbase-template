

export default function Footer() {
  return (
    <div className="fixed bottom-0 absolute w-full py-5 text-center">
      <p className="text-gray-500">
        Built by {" "}
        <a
          className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline mr-4"
          href="https://github.com/jtfirek"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jacob Firek 
        </a>
         Powered by {" "}
         <a href="https://www.mintbase.xyz/" target="_blank" rel="noopener noreferrer">
            <img 
              src="/mintbase-logo.avif"
              alt="Mintbase Logo" 
              className="inline-block align-middle h-8"
            />
        </a>
      </p>
    </div>
  );
}
