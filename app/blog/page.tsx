import { BlogHero } from "@/components/blog/blog-hero"
import { BlogPosts } from "@/components/blog/blog-posts"
import { BlogCategories } from "@/components/blog/blog-categories"

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <BlogHero />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <BlogCategories />
          <div className="lg:col-span-3">
            <BlogPosts />
          </div>
        </div>
      </div>
    </div>
  )
}
