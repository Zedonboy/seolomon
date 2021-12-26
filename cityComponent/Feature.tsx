/* This example requires Tailwind CSS v2.0+ */
import {
  CloudUploadIcon,
  AcademicCapIcon,
  CashIcon
} from "@heroicons/react/outline";

const features = [
  { name: "Optimized Content", icon: CloudUploadIcon, content: "Our Contents are optimized for search engine web crawlers to understand and index them" },
  { name: "Affordable Service", icon: CashIcon, content: "You no more need to pay extra bucks to freelancers, when an A.I system can do it cheaply" },
  { name: "High Quality Content", icon: AcademicCapIcon, content: "Our contents are academically sound, for anyone to understand" },
  // { name: "A.I Generated", icon:  },
  // { name: "Powerful API", icon: CogIcon },
  // { name: "Database Backups", icon: ServerIcon },
];

export default function Features() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-green-600 uppercase">
          Write faster
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          A.I SEO Writer
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          SEOLO is a virtual SEO content marketing specialist powered by
          artificial intelligence that can automatically write affordable and
          personalized SEO optimized content for your websites, blogs and social
          channels.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-green-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                     {feature.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
