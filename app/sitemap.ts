import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://apexautomations.com';

    // Static pages
    const routes = [
        '',
        '/about',
        '/automation-services',
        '/industry-automation',
        '/ai-and-automation-blog',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 1,
    }));

    // Blog posts
    const blogPosts = [
        'future-of-ai-automation-2026',
        'ai-agents-vs-chatbots',
    ].map((slug) => ({
        url: `${baseUrl}/ai-and-automation-blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Industry pages
    const industries = [
        'healthcare-automation',
        'financial-automation',
        'real-estate-automation',
        'legal-automation',
        'construction-automation',
        'medical-spa-automation',
        'recruitment-automation',
        'cleaning-business-automation',
        'hospitality-automation',
        'web-design-automation',
        'ecommerce-automation',
    ].map((slug) => ({
        url: `${baseUrl}/industry-automation/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [...routes, ...blogPosts, ...industries];
}
