# Robots.txt Configuration Guide - HIGHEND Interiors

## Current Configuration

Your site has two robots.txt configurations:

### 1. Static robots.txt (`/public/robots.txt`)
- Serves as fallback for static file serving
- Allows all search engines to crawl public content
- Blocks API routes, Next.js internals, and admin pages
- Includes sitemap location

### 2. Dynamic robots.ts (`/app/robots.ts`)
- Next.js dynamic route that generates robots.txt at runtime
- Provides more granular control per search engine
- Blocks bad bots (MJ12bot, AhrefsBot, SemrushBot)
- Optimized crawl delays for different bots

## Configuration Details

### Allow Rules
```
User-agent: *
Allow: /
```
- Allows all search engines to crawl all public pages
- Essential for SEO visibility

### Disallow Rules
```
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /.next/
Disallow: /node_modules/
```
- `/api/` - Prevents crawling of API endpoints
- `/_next/` - Blocks Next.js internal routes
- `/admin/` - Protects admin panel from indexing
- `/.next/` - Blocks build artifacts
- `/node_modules/` - Prevents crawling of dependencies

### Search Engine Specific Rules

**Googlebot**
- Crawl-delay: 0.5 seconds (faster crawling allowed)
- Full access to public content
- Helps with faster indexing

**Bingbot**
- Crawl-delay: 1 second (standard crawling)
- Full access to public content
- Ensures proper Bing indexing

**Other Bots**
- Crawl-delay: 1 second (standard)
- Same access as general rules

### Blocked Bots
- **MJ12bot** - Majestic crawler (aggressive)
- **AhrefsBot** - Ahrefs crawler (resource intensive)
- **SemrushBot** - Semrush crawler (aggressive)

These bots are blocked to prevent server overload and unnecessary crawling.

## Sitemap Configuration
```
Sitemap: https://highendinteriors.co.in/sitemap.xml
```
- Points search engines to your sitemap
- Helps with comprehensive site indexing
- Includes all 43 pages with proper priorities

## Testing Your robots.txt

### Google Search Console
1. Go to Google Search Console
2. Select your property
3. Go to Settings > Crawl > robots.txt Tester
4. Verify all rules are working correctly

### Bing Webmaster Tools
1. Go to Bing Webmaster Tools
2. Select your site
3. Go to Crawl Control > robots.txt
4. Verify configuration

### Online Tools
- https://www.seobility.net/en/robotstxt/
- https://www.screaming-frog.co.uk/seo-spider/
- https://www.robotstxt.org/

## Best Practices

### ✅ Do's
- Keep robots.txt simple and clear
- Use specific user-agent rules for major search engines
- Block only necessary paths (API, admin, internals)
- Include sitemap location
- Test regularly with Google's tester
- Use reasonable crawl delays (0.5-2 seconds)

### ❌ Don'ts
- Don't block important content pages
- Don't use robots.txt for security (use .htaccess or headers)
- Don't block CSS, JS, or image files needed for rendering
- Don't set crawl-delay too high (slows indexing)
- Don't block robots.txt itself

## Common Issues & Solutions

### Issue: Pages not being indexed
**Solution**: Check if pages are accidentally blocked in robots.txt

### Issue: API endpoints being indexed
**Solution**: Ensure `/api/` is in disallow list (already done)

### Issue: Slow crawling
**Solution**: Reduce crawl-delay or remove it for major search engines

### Issue: Bad bots overloading server
**Solution**: Block specific bots (already configured)

## Monitoring

### Check Crawl Stats
1. Google Search Console → Settings → Crawl Stats
2. Monitor crawl requests and errors
3. Adjust crawl-delay if needed

### Monitor Server Load
- Check server logs for bot activity
- Monitor CPU and bandwidth usage
- Adjust rules if bots cause issues

## Next Steps

1. ✅ Submit robots.txt to Google Search Console
2. ✅ Submit robots.txt to Bing Webmaster Tools
3. ✅ Test with Google's robots.txt Tester
4. ✅ Monitor crawl stats for 2-4 weeks
5. ✅ Adjust crawl-delay if needed based on server load

## Files Modified

- `/public/robots.txt` - Static robots.txt file
- `/app/robots.ts` - Dynamic Next.js robots.ts route

Both files work together to provide optimal crawling configuration.
