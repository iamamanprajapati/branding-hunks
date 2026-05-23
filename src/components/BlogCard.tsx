import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import type { BlogPost } from '../lib/blogPosts';
import { formatPostDate } from '../lib/blogPosts';

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-brand-orange/20 transition-all duration-300 h-full"
    >
      <span className="text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
        {post.category}
      </span>
      <h2 className="font-display font-bold text-lg sm:text-xl text-gray-900 mb-3 group-hover:text-brand-orange transition-colors line-clamp-2">
        {post.title}
      </h2>
      <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 flex-grow line-clamp-3">
        {post.description}
      </p>
      <div className="flex items-center justify-between text-sm text-gray-400 mt-auto pt-4 border-t border-gray-50">
        <span>{formatPostDate(post.publishedAt)}</span>
        <span className="inline-flex items-center gap-1">
          <Clock size={14} aria-hidden />
          {post.readTimeMinutes} min read
        </span>
      </div>
      <span className="inline-flex items-center gap-1 text-brand-blue font-bold text-sm mt-4 group-hover:gap-2 transition-all">
        Read article <ArrowRight size={16} />
      </span>
    </Link>
  );
}
