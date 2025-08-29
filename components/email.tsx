import Link from "next/link";

const EmailSection = () => {
  return (
    <section className="bg-red-700">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold">Reframe your inbox</h2>
        <p className="text-lg mt-4 mb-8">
          Subscribe to our newsletter and never miss a story.
        </p>
        <form className="flex flex-col items-center gap-4 max-w-lg mx-auto">
          <div className="w-full ">
            <label htmlFor="email" className="block text-left text-white mb-2">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>
          <button
            type="submit"
            className="border border-black text-black px-8 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-black hover:text-white"
          >
            SUBSCRIBE
          </button>
        </form>
        <p className="text-sm mt-6">
          We care about your data in our{" "}
          <Link href="/privacy-policy" className="underline">
            privacy policy.
          </Link>
        </p>
      </div>
    </section>
  );
};

export default EmailSection;
