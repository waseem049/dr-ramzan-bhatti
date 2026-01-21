export const SkeletonLoader = {
  Card: () => (
    <div className="animate-pulse bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="w-full aspect-video bg-gray-200 rounded-xl mb-4" />
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-3" />
      <div className="h-4 bg-gray-200 rounded w-full mb-2" />
      <div className="h-4 bg-gray-200 rounded w-5/6" />
    </div>
  ),

  BlogCard: () => (
    <div className="animate-pulse bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
      <div className="w-full aspect-[16/10] bg-gray-200" />
      <div className="p-6 space-y-3">
        <div className="h-3 bg-gray-200 rounded w-24" />
        <div className="h-6 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="flex items-center gap-4 pt-4">
          <div className="w-10 h-10 bg-gray-200 rounded-full" />
          <div className="flex-1">
            <div className="h-3 bg-gray-200 rounded w-20 mb-2" />
            <div className="h-3 bg-gray-200 rounded w-32" />
          </div>
        </div>
      </div>
    </div>
  ),

  TreatmentCard: () => (
    <div className="animate-pulse bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <div className="w-16 h-16 bg-gray-200 rounded-full mb-6" />
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />
      <div className="space-y-2 mb-6">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
        <div className="h-4 bg-gray-200 rounded w-4/6" />
      </div>
      <div className="h-10 bg-gray-200 rounded-full w-32" />
    </div>
  ),

  TestimonialCard: () => (
    <div className="animate-pulse bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
      <div className="flex justify-between items-start mb-8">
        <div className="w-12 h-12 bg-gray-200 rounded" />
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-gray-200 rounded-full" />
          ))}
        </div>
      </div>
      <div className="space-y-3 mb-8">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-3/4" />
      </div>
      <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
        <div className="w-12 h-12 bg-gray-200 rounded-full" />
        <div className="flex-1">
          <div className="h-4 bg-gray-200 rounded w-32 mb-2" />
          <div className="h-3 bg-gray-200 rounded w-24" />
        </div>
      </div>
    </div>
  ),

  List: ({ count = 3, type = "card" }: { count?: number; type?: "card" | "blog" | "treatment" | "testimonial" }) => {
    const SkeletonComponent = {
      card: SkeletonLoader.Card,
      blog: SkeletonLoader.BlogCard,
      treatment: SkeletonLoader.TreatmentCard,
      testimonial: SkeletonLoader.TestimonialCard,
    }[type];

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {[...Array(count)].map((_, index) => (
          <SkeletonComponent key={index} />
        ))}
      </div>
    );
  },

  Text: ({ lines = 3, className = "" }: { lines?: number; className?: string }) => (
    <div className={`animate-pulse space-y-3 ${className}`}>
      {[...Array(lines)].map((_, i) => (
        <div
          key={i}
          className="h-4 bg-gray-200 rounded"
          style={{ width: i === lines - 1 ? "75%" : "100%" }}
        />
      ))}
    </div>
  ),

  Image: ({ className = "" }: { className?: string }) => (
    <div className={`animate-pulse bg-gray-200 rounded-xl ${className}`} />
  ),

  Circle: ({ size = "w-12 h-12" }: { size?: string }) => (
    <div className={`animate-pulse bg-gray-200 rounded-full ${size}`} />
  ),

  Button: ({ className = "" }: { className?: string }) => (
    <div className={`animate-pulse bg-gray-200 rounded-full h-12 ${className}`} />
  ),

  Page: () => (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Skeleton */}
      <div className="pt-32 pb-20 px-4 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-gray-200 rounded w-1/4" />
            <div className="h-16 bg-gray-200 rounded w-3/4" />
            <div className="h-6 bg-gray-200 rounded w-1/2" />
            <div className="flex gap-4">
              <div className="h-12 bg-gray-200 rounded-full w-40" />
              <div className="h-12 bg-gray-200 rounded-full w-40" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="py-20 px-4 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <SkeletonLoader.List count={6} />
        </div>
      </div>
    </div>
  ),
};
