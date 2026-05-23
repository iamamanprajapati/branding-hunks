import React from 'react';
import type { BlogBlock } from '../lib/blogPosts';

export function BlogArticle({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <article className="prose-blog max-w-none">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h3':
            return (
              <h3
                key={i}
                className="font-display font-semibold text-lg sm:text-xl text-gray-900 mt-8 mb-3"
              >
                {block.text}
              </h3>
            );
          case 'h2':
            return (
              <h2
                key={i}
                className="font-display font-bold text-xl sm:text-2xl text-gray-900 mt-10 mb-4 first:mt-0"
              >
                {block.text}
              </h2>
            );
          case 'ul':
            return (
              <ul key={i} className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          case 'p':
          default:
            return (
              <p key={i} className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                {block.text}
              </p>
            );
        }
      })}
    </article>
  );
}
