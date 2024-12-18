import React from 'react';

const Homepage = () => {
  return (
    <div className="min-h-screen p-8">
      {/* Header Section */}
      <header className="mb-12">
        <h1 className="text-4xl font-semibold">Welcome to SecureFuture Insurance Brokers</h1>
        <p className="mt-4 text-lg">Your Trusted Partner in Financial and Insurance Solutions</p>
      </header>

      {/* Services Section */}
      <section className="mb-12">
        <div className="space-y-8">
          <div className="p-6  rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Life and Health Insurance</h3>
            <p>Protect yourself and your loved ones with policies that cover critical illnesses, hospital expenses, and more. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic sunt voluptates aut facilis officiis iure, dolores ut, voluptatum eligendi tenetur deleniti pariatur tempora earum? Unde commodi quod aliquam dolorum cumque.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
