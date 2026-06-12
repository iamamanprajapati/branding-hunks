export interface LandingPageItem {
  slug: string;
  keyword: string;
  title: string;
  description: string;
  category: string;
  introText: string;
  detailedText: string;
  whyUsText: string;
  processText: string;
  portfolioIds: string[];
  faqs: { question: string; answer: string }[];
  benefits: string[];
}

// Map categories to list of services
export const CATEGORY_MAP: Record<string, { name: string; items: { keyword: string; slug: string; intro: string; benefits: string[]; faqs: { q: string; a: string }[] }[] }> = {
  'core-editing': {
    name: 'Core Video Editing Services',
    items: [
      {
        keyword: 'Video Editing Company in Noida',
        slug: 'video-editing-company-in-noida',
        intro: 'Looking for the premier video editing company in Noida? Branding Hunks delivers end-to-end professional video post-production services. We specialize in transforming raw footage into high-retention, conversion-optimized video assets for D2C brands, YouTube creators, corporate profiles, and social media campaigns.',
        benefits: ['Fast turnaround times with dedicated editors', 'Professional color grading, audio cleaning, and sound design', 'Optimized for high-retention on social media platforms'],
        faqs: [
          { q: 'What software does your video editing company in Noida use?', a: 'Our expert editors use industry-leading tools like Adobe Premiere Pro, After Effects, and DaVinci Resolve to deliver high-quality, professional video edits.' },
          { q: 'How do you handle revisions for video projects?', a: 'We offer a structured feedback process where you can submit notes, and we provide up to 3 rounds of standard revisions to ensure the final cut is perfect.' }
        ]
      },
      {
        keyword: 'Professional Video Editing Services in Noida',
        slug: 'professional-video-editing-services-in-noida',
        intro: 'Unlock enterprise-grade storytelling with our professional video editing services in Noida. From cinematic color correction to multi-camera syncing and motion graphics, our team of expert editors ensures your brand videos stand out in a crowded digital landscape.',
        benefits: ['Cinematic grading and advanced color matching', 'Seamless transitions and storytelling flow', 'High-fidelity audio mixing and voiceover balancing'],
        faqs: [
          { q: 'What types of videos do you professionally edit?', a: 'We edit everything from corporate brand films, commercial ads, product showcases, to YouTube documentaries and short-form social media reels.' },
          { q: 'Can you work with 4K or RAW video files?', a: 'Yes, our hardware and pipeline are fully optimized to handle 4K, 8K, and RAW footage from professional cameras.' }
        ]
      },
      {
        keyword: 'Freelance Video Editor in Noida',
        slug: 'freelance-video-editor-in-noida',
        intro: 'Need the flexibility of a freelance video editor in Noida but want the reliability and support of an agency? Branding Hunks provides dedicated, on-demand video editing experts who act as your internal team, delivering premium edits without the overhead.',
        benefits: ['Flexible hiring models for single projects or monthly retainers', 'Direct line of communication with your editor', 'No agency bloat — fast execution and direct results'],
        faqs: [
          { q: 'Is hiring a freelance video editor from you cheaper than hiring a full agency?', a: 'Yes, we offer custom freelance-style retainer models that fit your budget while guaranteeing professional-grade output and reliability.' },
          { q: 'Can the editor join our local team meetings in Noida?', a: 'Absolutely, our dedicated editors can join virtual stand-ups or coordinate in-person meetings at our Sector 63 office.' }
        ]
      },
      {
        keyword: 'Affordable Video Editing in Noida',
        slug: 'affordable-video-editing-in-noida',
        intro: 'High-quality videos do not have to break the bank. Get affordable video editing in Noida with transparent pricing, zero hidden costs, and exceptional post-production standards tailored to startups, growing brands, and content creators.',
        benefits: ['Cost-effective packages designed for startups', 'No compromise on editing quality or render standards', 'Tiered pricing based on complexity and video length'],
        faqs: [
          { q: 'How do you keep video editing costs affordable?', a: 'By standardizing our workflow and using efficient templates for assets, graphics, and coloring, we pass those operational savings onto you.' },
          { q: 'Do you offer discount packages for bulk video edits?', a: 'Yes, we offer special discounted rates for monthly packages of 10+ social media reels or regular YouTube uploads.' }
        ]
      },
      {
        keyword: 'Corporate Video Editing in Noida',
        slug: 'corporate-video-editing-in-noida',
        intro: 'Enhance your brand authority with corporate video editing in Noida. We edit sleek company profiles, internal training videos, event recaps, executive interviews, and promotional reels that reflect your corporate values and capture stakeholder attention.',
        benefits: ['Clean, professional layout matching corporate branding guidelines', 'Integration of custom typography, lower-thirds, and slide graphics', 'Crystal-clear audio restoration and noise cancellation'],
        faqs: [
          { q: 'Do you sign Non-Disclosure Agreements (NDAs)?', a: 'Yes, we respect corporate privacy. We happily sign NDAs before handling any internal corporate video assets.' },
          { q: 'Can you integrate our brand style guide and colors?', a: 'Yes, we pre-program your exact font, color palettes, and logos into our editing project template.' }
        ]
      },
      {
        keyword: 'YouTube Video Editing Services in Noida',
        slug: 'youtube-video-editing-services-in-noida',
        intro: 'Increase your audience retention and click-through rates with YouTube video editing services in Noida. We specialize in dynamic jump-cuts, zoom-ins, meme integrations, professional sound effects, and thumbnail-friendly color grading to help you grow your channel.',
        benefits: ['High-retention editing style optimized for the YouTube algorithm', 'Sound effects, b-roll integration, and screen-pop graphics', 'Optional click-worthy thumbnail design add-on'],
        faqs: [
          { q: 'Do you edit long-form YouTube videos like vlogs or podcasts?', a: 'Yes, we edit long-form vlogs, business talk shows, educational content, and video podcasts.' },
          { q: 'What is the turnaround time for a 15-minute YouTube video?', a: 'Typically, we deliver the first draft within 3 to 5 business days.' }
        ]
      },
      {
        keyword: 'Reels & Shorts Editing Company in Noida',
        slug: 'reels-shorts-editing-company-in-noida',
        intro: 'Stand out on mobile feeds with the premier reels & shorts editing company in Noida. We edit fast-paced, highly engaging portrait videos for Instagram Reels, YouTube Shorts, and TikTok with trendy dynamic captions, emojis, and sound design.',
        benefits: ['Optimized hook framing within the first 3 seconds', 'Auto-timed animated captions with trending style presets', 'High-tempo sound effects and visual transitions'],
        faqs: [
          { q: 'Can you edit in the style of Alex Hormozi or Ali Abdaal?', a: 'Yes, our editors are experts in creating modern, fast-paced, talking-head shorts with icons, dynamic text, and sound effects.' },
          { q: 'Do you compile multiple clips from a single long video?', a: 'Yes, we do repurposing. We can chop down a 1-hour podcast into 10 high-impact shorts.' }
        ]
      },
      {
        keyword: 'Wedding Video Editing in Noida',
        slug: 'wedding-video-editing-in-noida',
        intro: 'Preserve precious memories with cinematic wedding video editing in Noida. We specialize in color grading raw wedding clips, syncing multiple camera angles, blending traditional music with romantic audio tracks, and creating cinematic trailers.',
        benefits: ['Cinematic color grading for dreamlike wedding visuals', 'Seamless multi-cam editing of ceremonies and dances', 'High-quality sound balancing for vows and speeches'],
        faqs: [
          { q: 'What do you require to edit our wedding video?', a: 'We require the raw footage from all cameras, the sequence of events, and your preferred background music choices.' },
          { q: 'Do you make short teaser trailers in addition to full films?', a: 'Yes, our packages include a 1-minute teaser for social media and a 15-30 minute full-length cinematic highlight film.' }
        ]
      },
      {
        keyword: 'Product Video Editing in Noida',
        slug: 'product-video-editing-in-noida',
        intro: 'Transform casual browsers into active buyers with product video editing in Noida. We edit e-commerce ads, Amazon product listing videos, and detailed demo clips that highlight key product features and drive conversion rates.',
        benefits: ['Highlight key features with callout annotations and text overlays', 'Studio-quality pacing matching upbeat background tracks', 'Optimized formats for Amazon, Shopify, and social media platforms'],
        faqs: [
          { q: 'Can you edit product videos from static photos?', a: 'Yes, we can create slideshow animations, add motion graphics, and zoom effects to create an engaging product video from photos.' },
          { q: 'Do you create videos for Amazon and Flipkart products?', a: 'Yes, we ensure all specs, formats, and aspect ratios match the guidelines for e-commerce listing platforms.' }
        ]
      },
      {
        keyword: 'Music Video Editing in Noida',
        slug: 'music-video-editing-in-noida',
        intro: 'Let your music visual speak as loudly as your audio track. Our music video editing in Noida features advanced rhythm-cuts, visual effects, complex speed ramping, and mood-setting color grading that matches the vibe of your track.',
        benefits: ['Beat-accurate cutting and visual synchronization', 'Creative transition styles, speed-ramping, and overlay effects', 'High-end stylized color grading to set the mood'],
        faqs: [
          { q: 'Can you add custom VFX or 3D elements to music videos?', a: 'Yes, we have motion graphics artists who can add visual overlays, glowing effects, and basic VFX.' },
          { q: 'How long does a music video edit take?', a: 'Due to the complexity of creative sync and grading, a music video edit usually takes 5 to 10 business days.' }
        ]
      }
    ]
  },
  'ugc-social': {
    name: 'UGC & Social Media Content',
    items: [
      {
        keyword: 'UGC Video Company in Noida',
        slug: 'ugc-video-company-in-noida',
        intro: 'As the leading UGC video company in Noida, Branding Hunks produces high-converting, authentic User Generated Content for D2C brands. We source creators, write persuasive scripts, shoot relatable mobile footage, and edit ads that convert.',
        benefits: ['Access to a diverse network of local and national UGC creators', 'Direct response copywriting that focuses on pain points', 'Mobile-first filming styles that blend natively into social feeds'],
        faqs: [
          { q: 'What is UGC and why is it effective?', a: 'UGC stands for User Generated Content. It looks like organic peer content, making it highly trusted and effective at reducing ad fatigue.' },
          { q: 'Do you handle the sourcing of content creators?', a: 'Yes, we handle the entire pipeline including sourcing creators, shipping products, and script writing.' }
        ]
      },
      {
        keyword: 'UGC Content Creator Agency in Noida',
        slug: 'ugc-content-creator-agency-in-noida',
        intro: 'Skip the stress of managing creators. Our UGC content creator agency in Noida manages creator outreach, contract negotiations, script briefings, and high-quality filming to deliver ready-to-run social media ad creatives.',
        benefits: ['Pre-vetted creators with excellent delivery and resolution', 'Strict quality checks on audio, lighting, and performance', 'Fast turnaround from product delivery to final ad files'],
        faqs: [
          { q: 'How do you choose creators for our brand?', a: 'We analyze your target demographic (age, gender, lifestyle) and match you with creators who fit your customer profile.' },
          { q: 'Who owns the usage rights to the UGC video files?', a: 'You get complete digital rights to use the edited videos in your meta ads, website, and social pages.' }
        ]
      },
      {
        keyword: 'UGC Video Production for Brands in Noida',
        slug: 'ugc-video-production-for-brands-in-noida',
        intro: 'Take your e-commerce brand to the next level with UGC video production for brands in Noida. We focus on hooks, product-unboxing, problem-solution angles, and strong calls-to-action that increase click-through rates (CTR) and conversions.',
        benefits: ['Direct-response frameworks designed for scaling ad spend', 'Engaging hooks and visual product texture close-ups', 'Custom localized hooks targeting Indian audiences'],
        faqs: [
          { q: 'Do you write the scripts for UGC videos?', a: 'Yes, our professional copywriters write scripts using direct response hooks and frameworks.' },
          { q: 'Can we send you our own scripts?', a: 'Yes, you can provide scripts or briefs, and we will guide the creators to execute them perfectly.' }
        ]
      },
      {
        keyword: 'Instagram Reels Production Company in Noida',
        slug: 'instagram-reels-production-company-in-noida',
        intro: 'Go viral and build a community with the top Instagram reels production company in Noida. We script, film, and edit trendy aesthetic reels, educational talking heads, and brand showcases optimized for Instagram growth.',
        benefits: ['Aesthetic and high-production layouts matching Instagram styles', 'Trending audio matching and pacing adaptation', 'Interactive captions and visual pop-ups to drive comments'],
        faqs: [
          { q: 'How often should we publish reels for growth?', a: 'We recommend posting 3 to 5 reels per week, and we offer monthly volume discounts to support this schedule.' },
          { q: 'Do you handle recording, or only editing?', a: 'We offer full-service reels production (we script, shoot at our studio or location, and edit) as well as edit-only services.' }
        ]
      },
      {
        keyword: 'Social Media Video Agency in Noida',
        slug: 'social-media-video-agency-in-noida',
        intro: 'Partner with a specialized social media video agency in Noida to build your online footprint. Branding Hunks designs comprehensive social video strategies that feed your content calendar across Instagram, YouTube, LinkedIn, and Facebook.',
        benefits: ['Multi-platform aspect ratio deliverables (9:16, 1:1, 16:9)', 'Platform-native styling (fonts, emojis, layouts)', 'Data-backed hook testing to optimize your content budget'],
        faqs: [
          { q: 'Do you manage our social media pages?', a: 'We are a production agency focused on content creation, but we work closely with your social media managers to align on calendar schedules.' },
          { q: 'What is the pricing model for social campaigns?', a: 'We offer monthly content retainers, giving you a fixed number of videos, graphics, and posts per month.' }
        ]
      },
      {
        keyword: 'Facebook Ad Video Production in Noida',
        slug: 'facebook-ad-video-production-in-noida',
        intro: 'Stop the scroll and lower your customer acquisition costs (CAC) with Facebook ad video production in Noida. We build performance creatives that balance brand aesthetics with high-converting direct-response layouts.',
        benefits: ['Optimized hooks that capture attention within the first 2 seconds', 'Split-testing variations (multiple hooks/angles)', 'High-contrast text overlays to communicate features without sound'],
        faqs: [
          { q: 'Do you build ads for silent viewing?', a: 'Yes! Over 80% of users watch FB ads with sound off, so we write and design prominent, readable text overlays.' },
          { q: 'Can you edit ads for specific funnel stages?', a: 'Yes, we create cold-traffic hook videos, middle-of-funnel reviews, and bottom-of-funnel offer/discount ads.' }
        ]
      },
      {
        keyword: 'Influencer Video Content Agency in Noida',
        slug: 'influencer-video-content-agency-in-noida',
        intro: 'We bridge the gap between creative influencers and brand directives. As a professional influencer video content agency in Noida, we script and edit collaboration videos that preserve the influencer\'s voice while driving your brand message.',
        benefits: ['Direct scripting guidelines to keep branding message on-point', 'High-quality audio edits and pacing fixes to amateur footage', 'Branded templates for split-screen and side-by-side reviews'],
        faqs: [
          { q: 'Do you manage influencer outreach?', a: 'Yes, we can help select and reach out to macro and micro-influencers matching your industry vertical.' },
          { q: 'Can you polish and color grade footage sent by influencers?', a: 'Absolutely, that is a core service. We take raw mobile footage from influencers and make it look professional.' }
        ]
      },
      {
        keyword: 'Viral Video Production Company in Noida',
        slug: 'viral-video-production-company-in-noida',
        intro: 'While no one can guarantee virality, our viral video production company in Noida uses proven retention psychology, trend tracking, and meme integration to give your social content the highest statistical chance of going viral.',
        benefits: ['Script structures engineered for high viewer retention', 'Seamless integration of pop-culture references and trends', 'Hook variations optimized for sharing and loops'],
        faqs: [
          { q: 'What makes a video go viral?', a: 'High relative retention, strong emotional response (humor, surprise, awe), and early engagement (shares and saves) trigger algorithmic distribution.' },
          { q: 'Do you create funny comedy skits or street interviews?', a: 'Yes, we script and film street interviews, reaction clips, and comedy sketches in Noida/Delhi.' }
        ]
      },
      {
        keyword: 'Short Form Video Agency in Noida',
        slug: 'short-form-video-agency-in-noida',
        intro: 'Short-form content is the fastest way to grow. Branding Hunks is a leading short form video agency in Noida, helping brands scale their organic reach and ad results through professional TikTok, Shorts, and Reels creation.',
        benefits: ['Fast-paced editing tailored for short attention spans', 'Comprehensive caption styling, emojis, and stickers', 'Expert scripting matching hook-body-cta structures'],
        faqs: [
          { q: 'Why is short-form video crucial for brands in 2026?', a: 'It is favored by algorithms, has the lowest cost of organic impression, and drives high engagement compared to static posts.' },
          { q: 'Can you rewrite our long blog posts into short reels?', a: 'Yes, we specialize in content repurposing. We can translate deep blog articles into engaging 60-second scripts.' }
        ]
      },
      {
        keyword: 'TikTok Style Video Company in Noida',
        slug: 'tiktok-style-video-company-in-noida',
        intro: 'Create engaging, raw, and high-converting content with our TikTok style video company in Noida. We design fast-cutting, native-looking portrait videos with music cues, voice filters, and text-to-speech to maximize organic feeds.',
        benefits: ['Native platform layouts that do not look like traditional ads', 'Use of popular sound effects and trending transitions', 'Quick reaction content built around trending audio tracks'],
        faqs: [
          { q: 'Since TikTok is banned in India, where do we use these videos?', a: 'These highly engaging, native formats perform exceptionally well on Instagram Reels, YouTube Shorts, and Facebook Ads.' },
          { q: 'How do you structure the script for TikTok style ads?', a: 'We start with a visual pattern-interrupter, state the user problem, showcase the product in action, and close with a direct CTA.' }
        ]
      }
    ]
  },
  'corporate-business': {
    name: 'Corporate & Business Videos',
    items: [
      {
        keyword: 'Corporate Video Production Company in Noida',
        slug: 'corporate-video-production-company-in-noida',
        intro: 'Branding Hunks is the premier corporate video production company in Noida. We design high-production-value corporate films, business narratives, office walk-throughs, and internal messaging videos that build corporate authority.',
        benefits: ['Professional crew with high-end cinema cameras and audio rigs', 'Scriptwriting and director support for executive interviews', 'Stunning corporate b-roll captured at your headquarters'],
        faqs: [
          { q: 'What is the process of a corporate video shoot?', a: 'It includes script writing, scouting, storyboard planning, filming with a professional crew, and comprehensive editing/grading.', },
          { q: 'Do you shoot on-site in corporate offices in Noida?', a: 'Yes, we specialize in on-site corporate shoots in Noida Sectors 62, 63, 18, 125, and across Delhi NCR.' }
        ]
      },
      {
        keyword: 'Brand Film Production in Noida',
        slug: 'brand-film-production-in-noida',
        intro: 'Tell your story through cinematic brand film production in Noida. We focus on emotional connection, high-end aesthetics, and storytelling structure that changes how customers perceive your brand and increases lifetime loyalty.',
        benefits: ['Cinematic visual aesthetics with anamorphic lenses and dynamic lighting', 'Narrative scripting that highlights your brand foundation story', 'Professional voiceovers and custom sound composition'],
        faqs: [
          { q: 'How long is a typical brand film?', a: 'Usually, brand films run between 2 to 5 minutes to deliver a deep, impactful message without losing viewer interest.', },
          { q: 'Can we use the brand film on TV or cinema halls?', a: 'Yes, we export our brand films in broadcast-ready formats matching television and theatrical specs.' }
        ]
      },
      {
        keyword: 'Company Profile Video in Noida',
        slug: 'company-profile-video-in-noida',
        intro: 'Introduce your business professionally with a company profile video in Noida. We combine founder interviews, office drone footage, product/service showcases, and client reviews to build trust with prospects and investors.',
        benefits: ['Professional structure demonstrating scale and capabilities', 'A combination of dynamic b-roll and engaging speaking segments', 'Incorporation of custom company charts, statistics, and icons'],
        faqs: [
          { q: 'Why does my business need a company profile video?', a: 'It acts as a 24/7 digital sales representative, building rapid trust on your homepage, LinkedIn, and proposal decks.', },
          { q: 'Can you shoot founder stories and team introductions?', a: 'Yes, we shoot talking-head interviews with founders and capture energetic team action clips.' }
        ]
      },
      {
        keyword: 'Explainer Video Company in Noida',
        slug: 'explainer-video-company-in-noida',
        intro: 'Simplify complex software, services, or physical products with an expert explainer video company in Noida. Branding Hunks writes scripts, builds storyboards, and produces engaging explanation videos that double your landing page conversion rates.',
        benefits: ['Engaging storytelling structures that solve user confusion', 'Custom characters, graphics, and UI mockups', 'Integration of voiceovers in multiple languages (Hindi, English, etc.)'],
        faqs: [
          { q: 'What is the standard length of an explainer video?', a: 'The sweet spot is 60 to 90 seconds. This is long enough to explain the solution but short enough to retain attention.' },
          { q: 'Do you produce animated explainers or live-action?', a: 'We offer both 2D animation explainers and live-action product/software walk-throughs.' }
        ]
      },
      {
        keyword: '2D Animation Video Company in Noida',
        slug: '2d-animation-video-company-in-noida',
        intro: 'Bring ideas to life with our 2D animation video company in Noida. We build custom vectors, character designs, fluid motion graphics, and animated kinetic typography to explain concepts, software, or services beautifully.',
        benefits: ['100% custom designs — no generic stock illustrations', 'Smooth fluid motion graphics and vector animation', 'Professional sound effects (SFX) and localized voice matching'],
        faqs: [
          { q: 'What is the workflow for 2D animation?', a: 'The workflow goes from script -> voiceover -> storyboard sketches -> illustration -> animation and final sound mix.' },
          { q: 'How long does a 2D animation project take?', a: 'On average, a 60-second high-quality 2D animation takes 2 to 3 weeks to complete.' }
        ]
      },
      {
        keyword: 'Product Demo Video Company in Noida',
        slug: 'product-demo-video-company-in-noida',
        intro: 'Show exactly how your product works. As a dedicated product demo video company in Noida, we highlight physical product functions or software UI flows, answering client doubts and reducing return rates.',
        benefits: ['High-definition macro close-ups showing textures and build quality', 'Interactive UI callouts and zoom-ins for digital products', 'Comparison views demonstrating before/after solutions'],
        faqs: [
          { q: 'Do we need to ship the physical product to your Noida studio?', a: 'Yes, you ship the product to our Sector 63 office, where our studio setup shoots high-definition demos under controlled lighting.' },
          { q: 'Can you handle software-as-a-service (SaaS) demos?', a: 'Yes, we create screen-recording-based demos with smooth zoom transitions and custom UI styling.' }
        ]
      },
      {
        keyword: 'Training & E-Learning Video in Noida',
        slug: 'training-e-learning-video-in-noida',
        intro: 'Scale your education programs and corporate onboarding with professional training & e-learning video in Noida. We edit structured, modular video courses, onboarding guides, and educational videos that keep students engaged.',
        benefits: ['Clear layout hierarchy with slide integrations and chapter breaks', 'High-quality screen layouts and teleprompter assistance', 'Dynamic visual cues, summaries, and title screens'],
        faqs: [
          { q: 'Can you record e-learning modules in your studio?', a: 'Yes, we have green-screen and dynamic backdrop setups in our Noida studio, perfect for recording trainers.' },
          { q: 'Do you edit bulk training courses?', a: 'Yes, we offer special retainer rates for editing multi-hour course programs.' }
        ]
      },
      {
        keyword: 'Testimonial Video Production in Noida',
        slug: 'testimonial-video-production-in-noida',
        intro: 'Let your customers do the selling. Our testimonial video production in Noida captures authentic, emotional stories of client satisfaction, framing them in premium interview setups that make prospects feel confident to buy.',
        benefits: ['Relatable, non-scripted feel that builds genuine trust', 'Professional lighting and multi-cam setups at client locations', 'Overlay of client b-roll showing your product/service in action'],
        faqs: [
          { q: 'How do you make clients feel comfortable on camera?', a: 'Our directors use conversational, prompt-based interviewing techniques rather than reading off a script, keeping responses natural.' },
          { q: 'Can you shoot testimonials at our client\'s office in Delhi NCR?', a: 'Yes, we travel with mobile production kits to shoot customer reviews directly at their premises.' }
        ]
      },
      {
        keyword: 'Event Videography Company in Noida',
        slug: 'event-videography-company-in-noida',
        intro: 'Capture the energy of your business gatherings with the top event videography company in Noida. We document corporate summits, office launches, workshops, and exhibitions, creating high-energy recap videos and reels.',
        benefits: ['Discreet shooting that does not disrupt the guest experience', 'Fast delivery of short highlights for social sharing', 'Full-length recording of speeches and panel sessions'],
        faqs: [
          { q: 'How many videographers do you send to an event?', a: 'Depending on the event size, we deploy 1 to 5 videographers, including drone operators and photographers.' },
          { q: 'What is the turnaround for an event recap video?', a: 'We provide a 1-minute social media recap within 48 hours, and the main film within 5 to 7 days.' }
        ]
      },
      {
        keyword: 'Conference Video Production in Noida',
        slug: 'conference-video-production-in-noida',
        intro: 'Preserve the knowledge shared at your summits with professional conference video production in Noida. We provide multi-camera setups, direct audio feeds, presentation slide integration, and live-stream capabilities.',
        benefits: ['Crystal-clear direct audio recording from stage microphones', 'Picture-in-picture slides and presentation overlay', 'Modular cuts of individual speakers for YouTube and LinkedIn sharing'],
        faqs: [
          { q: 'Do you offer live-streaming services for conferences?', a: 'Yes, we provide high-definition live-streaming to YouTube, Facebook, LinkedIn, or custom private servers.' },
          { q: 'Can you record panels with multiple speakers?', a: 'Yes, we use multi-channel audio setups to record up to 8 stage speakers concurrently with crisp clarity.' }
        ]
      }
    ]
  },
  'advertising-marketing': {
    name: 'Advertising & Marketing Videos',
    items: [
      {
        keyword: 'TV Commercial Production in Noida',
        slug: 'tv-commercial-production-in-noida',
        intro: 'Take your brand to millions with premium TV commercial production in Noida. Branding Hunks scripts, directs, casts, films, and edits cinematic commercial ads that meet strict broadcast standards and capture national attention.',
        benefits: ['Cinema-grade production value (Arri/RED/Sony FX systems)', 'Professional actors, voiceover talent, and set location scouting', 'Adherence to television technical specifications and aspect ratios'],
        faqs: [
          { q: 'Do you handle scripts and storyboard approval?', a: 'Yes, we handle the entire concept phase, from drafting ideas to detailed shot lists and script approvals.' },
          { q: 'Can you handle broadcast clearance approvals?', a: 'We format and export files to meet standard television regulatory codes, making the approval process seamless.' }
        ]
      },
      {
        keyword: 'Ad Film Making Company in Noida',
        slug: 'ad-film-making-company-in-noida',
        intro: 'We build films that drive metrics. As a premium ad film making company in Noida, we bridge the gap between creative visual art and digital direct response copywriting, creating commercial films that build brands and sell products.',
        benefits: ['High-impact visual sequences designed to hook viewers', 'Experienced directors and production managers in Noida', 'Flexible scales of production matching mid-market and enterprise budgets'],
        faqs: [
          { q: 'What is the difference between an ad film and a social video?', a: 'Ad films utilize high-end lighting, actor casting, set designs, and cinematic pacing, creating a much higher level of trust and prestige.' },
          { q: 'Where are your ad films shot?', a: 'We shoot on locations around Noida/NCR, in studios with custom built sets, or at client offices/factories.' }
        ]
      },
      {
        keyword: 'Digital Marketing Video Agency in Noida',
        slug: 'digital-marketing-video-agency-in-noida',
        intro: 'Partner with a digital marketing video agency in Noida that understands key advertising analytics. We do not just build pretty videos; we design video systems that lower customer acquisition costs (CAC) and increase return on ad spend (ROAS).',
        benefits: ['Creatives structured specifically for Meta, Google, and YouTube ads', 'Hook variations to test and combat creative fatigue', 'Data-driven visual editing based on viewer drop-off analytics'],
        faqs: [
          { q: 'How do you ensure marketing videos perform well?', a: 'We write scripts using proven frameworks like AIDA (Attention, Interest, Desire, Action) and optimize visual pacing within target parameters.' },
          { q: 'Do you run the ads, or only produce them?', a: 'We are a pure creative production agency, but we partner with leading media buying agencies to align content with ad performance.' }
        ]
      },
      {
        keyword: 'Performance Marketing Video in Noida',
        slug: 'performance-marketing-video-in-noida',
        intro: 'Boost your performance marketing metrics with performance marketing video in Noida. We build structured ad creatives that focus on pain-points, highlight product features, address user friction, and close with high-converting offers.',
        benefits: ['Split-tested hook variations (3 hooks per video)', 'Highly optimized text overlays for sound-off mobile scrolling', 'Clear calls to action that drive direct click-throughs'],
        faqs: [
          { q: 'What is a performance marketing video?', a: 'It is a video ad built specifically to drive a direct conversion (sales, leads) rather than just broad brand awareness.' },
          { q: 'Do you offer variations in video lengths?', a: 'Yes, we typically deliver 15-second, 30-second, and 60-second cuts of each ad creative.' }
        ]
      },
      {
        keyword: 'Video Ads for eCommerce in Noida',
        slug: 'video-ads-for-ecommerce-in-noida',
        intro: 'Scale your online store with high-converting video ads for eCommerce in Noida. We build product unboxing reels, comparison videos, feature showcases, and founder messages that drive traffic to your Shopify, Amazon, or custom D2C site.',
        benefits: ['Engaging product texture close-ups and demonstration clips', 'Customer social proof overlays integrated seamlessly into the edit', 'Aspect ratios matching Instagram stories, feed posts, and cart pages'],
        faqs: [
          { q: 'What e-commerce niches do you work with?', a: 'We work across apparel, cosmetics, health & wellness, home decor, food & beverage, and consumer tech.' },
          { q: 'Can you edit ads using existing product photos?', a: 'Yes, we can compile, animate, and color grade photos and existing footage to create a fresh high-converting e-commerce ad.' }
        ]
      },
      {
        keyword: 'Amazon Product Video Company in Noida',
        slug: 'amazon-product-video-company-in-noida',
        intro: 'Double your listing conversion rates. Branding Hunks is a leading Amazon product video company in Noida, creating listing videos, product demos, brand store content, and sponsored brand video ads that highlight value and address customer objections.',
        benefits: ['Strict compliance with Amazon listing video dimensions and guidelines', 'Highlight of key USPs, sizing, usage guidelines, and build details', 'High-energy sponsor ad creatives optimized for search results (SBV)'],
        faqs: [
          { q: 'What is the required length for Amazon product listing videos?', a: 'Amazon listing videos must be under 60 seconds, and ideally between 30 to 45 seconds.' },
          { q: 'Do you provide the models and studio setup for Amazon videos?', a: 'Yes, we handle actor casting, kitchen/living-room studio setups, and macro photography in Noida.' }
        ]
      },
      {
        keyword: 'Flipkart Product Video Shoot in Noida',
        slug: 'flipkart-product-video-shoot-in-noida',
        intro: 'Boost your Flipkart product sales with a professional Flipkart product video shoot in Noida. We shoot crisp, clear videos showing product details, sizing, materials, and usage to reduce returns and build buyer trust.',
        benefits: ['Highlight real-life product scale and material textures', 'Professional lighting that shows accurate product colors', 'Fast turnaround to get your listings live quickly'],
        faqs: [
          { q: 'What parameters do you maintain for Flipkart videos?', a: 'We maintain accurate colors, clear product sizing, clean backgrounds, and format files to match Flipkart upload specifications.' },
          { q: 'Can you shoot fashion and apparel product videos?', a: 'Yes, we work with models to shoot dynamic clothing walks, fabric close-ups, and lookbooks.' }
        ]
      },
      {
        keyword: 'Video Production for Startups in Noida',
        slug: 'video-production-for-startups-in-noida',
        intro: 'Launch your brand with impact. Our video production for startups in Noida gives emerging companies high-end visual assets (founder stories, product explainers, pitch videos) that attract early customers and secure venture capital.',
        benefits: ['Cost-efficient packages tailored for early-stage companies', 'Strategic advice on video placement for pitch decks and landing pages', 'Highly adaptable team that can move fast from concept to final edit'],
        faqs: [
          { q: 'We are pre-product, can you still make a video?', a: 'Yes, we can build 2D/3D animated explainers or software UI mockups to explain your vision to early adopters and investors.' },
          { q: 'Do you help startup founders record their pitch reels?', a: 'Yes, we shoot professional talking-head videos with teleprompter help in our Noida studio.' }
        ]
      },
      {
        keyword: 'D2C Brand Video Agency in Noida',
        slug: 'd2c-brand-video-agency-in-noida',
        intro: 'Branding Hunks is the go-to D2C brand video agency in Noida. We understand e-commerce hooks, viewer drop-offs, D2C storytelling, and customer retention, delivering video ads that scale from bootstrapped launches to high monthly ad budgets.',
        benefits: ['UGC, product photography, and high-end commercial ads all under one roof', 'Direct-response copy targeted to Indian e-commerce buyers', 'Continuous testing pipelines to combat creative fatigue'],
        faqs: [
          { q: 'How do you coordinate with our internal marketing team?', a: 'We set up shared Slack or WhatsApp channels and design a regular monthly deliverable calendar.' },
          { q: 'Do you shoot lifestyle aesthetics for D2C products?', a: 'Yes, we shoot premium lifestyle settings (kitchens, gym setups, vanity spaces) to put your product in context.' }
        ]
      },
      {
        keyword: 'Fashion Video Production in Noida',
        slug: 'fashion-video-production-in-noida',
        intro: 'Capture style in motion. Our fashion video production in Noida focuses on fluid movements, accurate fabric representation, aesthetic model walks, and stylized editing, creating stunning visuals for your clothing and accessory lines.',
        benefits: ['Model styling and high-fashion lighting setups', 'Dynamic pacing syncing with modern music beats', 'Deliverables in portrait reels and high-res landscape formats'],
        faqs: [
          { q: 'Can you shoot indoor studio lookbooks and outdoor lifestyle walks?', a: 'Yes, we shoot in our Noida studio with clean backdrops and scout aesthetic local outdoor settings.' },
          { q: 'Do you cast fashion models?', a: 'Yes, we coordinate with leading casting agencies to source models matching your brand\'s aesthetic.' }
        ]
      }
    ]
  },
  'location-based': {
    name: 'Location-Based Pages',
    items: [
      {
        keyword: 'Video Editing Company in Sector 62 Noida',
        slug: 'video-editing-company-in-sector-62-noida',
        intro: 'Conveniently located near the business hub, we are the top video editing company in Sector 62 Noida. We provide fast, reliable, and premium post-production services to IT firms, startups, and D2C brands in the area.',
        benefits: ['Local team for quick, in-person file handovers and briefings', 'Fast turnaround for nearby Sector 62 and Sector 63 businesses', 'Expertise in corporate profiles, product showcases, and social ads'],
        faqs: [
          { q: 'Can we visit your office for a video review?', a: 'Yes, our main studio office is in Sector 63, right next to Sector 62. You can book an appointment to sit down with your editor.' },
          { q: 'Do you provide pick-and-drop for raw hard drives?', a: 'Yes, we can arrange local courier pickups for raw footage drives from Sector 62 offices.' }
        ]
      },
      {
        keyword: 'Video Production Company in Sector 18 Noida',
        slug: 'video-production-company-in-sector-18-noida',
        intro: 'Bring your brand to life with the best video production company in Sector 18 Noida. From scripting and model shoots to local market coverage and retail store tours, we capture outstanding visuals in Noida\'s prime commercial district.',
        benefits: ['Experience shooting retail displays and customer testimonials in Sector 18', 'Professional studio lighting and actors sourced locally', 'End-to-end management from concept storyboard to final delivery'],
        faqs: [
          { q: 'Do you shoot inside retail stores and showrooms in Sector 18?', a: 'Yes, we arrange lightweight, mobile camera rigs to shoot clean retail, restaurant, or salon videos on location.' },
          { q: 'Can you edit social reels to promote our local Sector 18 business?', a: 'Absolutely, we specialize in high-converting localized reels that drive physical foot traffic.' }
        ]
      },
      {
        keyword: 'Video Editing Company in Greater Noida',
        slug: 'video-editing-company-in-greater-noida',
        intro: 'Looking for a reliable video editing company in Greater Noida? Branding Hunks serves educational institutions, real estate projects, and industrial units in Greater Noida with professional video post-production services.',
        benefits: ['Scalable editing packages for corporate profiles and virtual tours', 'Professional voiceovers and multilingual localization', 'High-quality audio restoration and slide integrations'],
        faqs: [
          { q: 'Do you work with universities and schools in Greater Noida?', a: 'Yes, we edit campus tours, course modules, event recaps, and online lecture series.' },
          { q: 'How do we send large video files from Greater Noida?', a: 'We set up secure shared Google Drive, Dropbox, or Frame.io folders to transfer raw assets seamlessly.' }
        ]
      },
      {
        keyword: 'Video Production Company in Noida Extension',
        slug: 'video-production-company-in-noida-extension',
        intro: 'Scale your real estate listings and brand reach. Our video production company in Noida Extension delivers high-definition drone shoots, apartment walk-throughs, lifestyle ads, and local business profiles.',
        benefits: ['Drone videography for high-rise residential societies and layout mapping', 'Quick, local shoot scheduling in Noida Extension and Greater Noida West', 'Modern aesthetic editing matching high-end lifestyle standards'],
        faqs: [
          { q: 'Do you have permission to shoot drone videos in Noida Extension?', a: 'Yes, our drone pilots comply with local Noida aviation zones and acquire necessary permissions for aerial shoots.' },
          { q: 'Can you shoot apartment interior videos for agents?', a: 'Yes, we use wide-angle stabilized lenses to make residential interiors look spacious and appealing.' }
        ]
      },
      {
        keyword: 'Video Editing Services in Delhi NCR',
        slug: 'video-editing-services-in-delhi-ncr',
        intro: 'Get premium video editing services in Delhi NCR. Branding Hunks serves clients across New Delhi, Gurgaon, Noida, Ghaziabad, and Faridabad, combining agency-grade quality with rapid delivery pipelines.',
        benefits: ['Comprehensive post-production (grading, audio, visuals)', 'Highly experienced editors working across multiple niches', 'Dedicated account managers for seamless communication'],
        faqs: [
          { q: 'Are your services available to remote clients in Delhi NCR?', a: 'Yes, we work with businesses across Delhi NCR using online collaboration boards like Frame.io.' },
          { q: 'What is your billing structure for NCR businesses?', a: 'We bill project-wise or on monthly retainers, providing GST-compliant invoices.' }
        ]
      },
      {
        keyword: 'Video Production Agency in Gurgaon',
        slug: 'video-production-agency-in-gurgaon',
        intro: 'As a premium video production agency in Gurgaon, we create high-impact corporate films, startup pitch decks, product listings, and digital ads for businesses in Cyber City, Golf Course Road, and Sohna Road.',
        benefits: ['Corporate b-roll shoots at premium Gurgaon headquarters', 'Professional director and teleprompter support for CEO interviews', 'Sleek animated graphics and financial chart integrations'],
        faqs: [
          { q: 'Do you travel to Gurgaon for office shoots?', a: 'Yes, our production crew travels across Delhi NCR to shoot corporate videos at your Gurgaon premises.' },
          { q: 'Can you cast professional actors for corporate ads in Gurgaon?', a: 'Yes, we handle actor casting and coordinate model scheduling for commercial shoots.' }
        ]
      },
      {
        keyword: 'Video Editing Company in Ghaziabad',
        slug: 'video-editing-company-in-ghaziabad',
        intro: 'Need quality post-production near you? Our video editing company in Ghaziabad provides professional video editing, motion graphics, and audio mixing services to local businesses, schools, and D2C brands.',
        benefits: ['Reliable local editor backups with agency-level infrastructure', 'Affordable packages matching small and mid-size budgets', 'Creative sound design and color optimization templates'],
        faqs: [
          { q: 'Can you edit personal family vlogs or wedding footage in Ghaziabad?', a: 'Yes, we edit commercial videos, wedding reels, and high-end personal vlogs.' },
          { q: 'How do you coordinate edits with Ghaziabad clients?', a: 'We coordinate via WhatsApp, Zoom reviews, and frame-by-frame commenting on video links.' }
        ]
      },
      {
        keyword: 'Corporate Video Company in Faridabad',
        slug: 'corporate-video-company-in-faridabad',
        intro: 'Build brand credibility. Branding Hunks is a leading corporate video company in Faridabad, producing factory walkthroughs, safety guides, industrial showcases, and corporate profiles for industrial units.',
        benefits: ['Experience shooting in heavy industrial and manufacturing zones', 'Compliance with safety guidelines during factory floor shoots', 'High-end drone layouts showing full industrial facilities'],
        faqs: [
          { q: 'Do you shoot industrial factory floors in Faridabad?', a: 'Yes, we capture industrial machinery, assembly operations, and safety processes on location.' },
          { q: 'Can you add subtitles and translations for worker training videos?', a: 'Yes, we create multi-language subtitle tracks and localize voiceovers for training films.' }
        ]
      },
      {
        keyword: 'Video Production Agency Near Delhi',
        slug: 'video-production-agency-near-delhi',
        intro: 'Looking for a professional video production agency near Delhi? Branding Hunks, located in Sector 63 Noida, offers world-class studio spaces, high-end cameras, and a dedicated team of scriptwriters and editors.',
        benefits: ['Close proximity to Delhi for rapid meetings and shoot coordination', 'Fully equipped studio with clean backdrops and professional soundproofing', 'Complete end-to-end production support under one roof'],
        faqs: [
          { q: 'Can Delhi-based clients use your Noida studio space?', a: 'Absolutely, our studio is open for client shoots, interviews, and reviews, just a short drive from Delhi.' },
          { q: 'Do you handle outdoor shoots in New Delhi landmarks?', a: 'Yes, we manage outdoor permits and shoots across commercial spots in New Delhi.' }
        ]
      },
      {
        keyword: 'Best Video Company in NCR Region',
        slug: 'best-video-company-in-ncr-region',
        intro: 'Work with the best video company in NCR region. Branding Hunks has produced hundreds of high-retention ads, product shoots, and corporate films, earning a reputation for execution speed and high performance.',
        benefits: ['A proven track record of millions of views on created videos', 'Unified team handling script, casting, shoot, edit, and graphics', 'Transparent direct-response setups designed to scale ad campaigns'],
        faqs: [
          { q: 'What makes Branding Hunks the best video company in NCR?', a: 'We blend high-end cinematic visuals with performance marketing data. Our videos do not just look good — they drive business growth.' },
          { q: 'Do you offer monthly subscription content packages?', a: 'Yes, we offer monthly retainer packages for brands looking for a continuous stream of social media videos.' }
        ]
      }
    ]
  },
  'niche-trending': {
    name: 'Niche & Trending Pages',
    items: [
      {
        keyword: 'Real Estate Video Production in Noida',
        slug: 'real-estate-video-production-in-noida',
        intro: 'Sell properties faster with premium real estate video production in Noida. We shoot stunning apartment walkthroughs, luxury villa films, drone development maps, and agent profiles that highlight property value.',
        benefits: ['Wide-angle stabilized interior shoots that look spacious', 'Stunning drone visuals showing local connectivity and neighborhoods', 'Sophisticated music overlays and agent speaking guides'],
        faqs: [
          { q: 'What is the pricing for real estate video shoots?', a: 'Pricing depends on property size and drone requirements, starting at affordable local rates.' },
          { q: 'How long does it take to get the edited property video?', a: 'We deliver real estate walkthrough drafts within 3 business days.' }
        ]
      },
      {
        keyword: 'Food & Restaurant Video in Noida',
        slug: 'food-restaurant-video-in-noida',
        intro: 'Make your audience hungry. Our food & restaurant video in Noida captures bubbling cheeses, sizzling pans, aesthetic dine-in atmospheres, and chef actions, driving table bookings and online orders.',
        benefits: ['High-frame-rate macro slow-motion shoots', 'Aesthetic color grading making food colors look rich and delicious', 'Short social media reels perfect for Zomato, Swiggy, and Instagram'],
        faqs: [
          { q: 'Do you shoot inside restaurants during operational hours?', a: 'We can shoot during slow hours or set up off-peak times to avoid disturbing your customers.' },
          { q: 'Can you shoot recipes and cooking tutorials?', a: 'Yes, we shoot recipe videos, cooking tutorials, and cloud-kitchen setup videos.' }
        ]
      },
      {
        keyword: 'Healthcare Video Production in Noida',
        slug: 'healthcare-video-production-in-noida',
        intro: 'Build patient trust. Our healthcare video production in Noida designs professional doctor interviews, hospital walkthroughs, clinical service explainers, and patient recovery testimonials.',
        benefits: ['Empathetic, reassuring tone in scripting and editing', 'Clean, high-definition clinical environment representations', 'Accurate, clear display of healthcare services and machinery'],
        faqs: [
          { q: 'How do you handle patient privacy during shoots?', a: 'We strictly follow hospital privacy rules and ensure patient consent forms are signed before recording.' },
          { q: 'Do you make medical service explainers with animations?', a: 'Yes, we combine doctor interviews with clean 2D graphics explaining procedures.' }
        ]
      },
      {
        keyword: 'EdTech Video Production Company in Noida',
        slug: 'edtech-video-production-company-in-noida',
        intro: 'Educate at scale. Branding Hunks is an experienced edtech video production company in Noida, editing course videos, lecture slides, school animations, and student orientation clips.',
        benefits: ['Modular video chapter formatting for e-learning portals', 'Integration of custom diagrams, math symbols, and bullet points', 'Teleprompter and studio setup for teachers and speakers'],
        faqs: [
          { q: 'Do you build green-screen setups for teachers?', a: 'Yes, we record presenters on green screens and replace backdrops with slides or animations.' },
          { q: 'Can you edit bulk modules for learning platforms?', a: 'Yes, we offer scalable monthly retainers for high-volume edtech platforms.' }
        ]
      },
      {
        keyword: 'Podcast Video Production in Noida',
        slug: 'podcast-video-production-in-noida',
        intro: 'Launch your podcast professionally. We provide podcast video production in Noida, capturing clean multi-camera angles, balancing crisp microphones, and cutting highlights for social media.',
        benefits: ['Multi-camera angle switching matching speaker flows', 'Crisp audio mastering, compression, and background noise removal', 'Fast highlight reel exports to drive traffic to full episodes'],
        faqs: [
          { q: 'How many cameras do you use for podcasts?', a: 'We use a 3-camera setup: one for each speaker and a wide master angle.' },
          { q: 'Do you edit audio podcasts as well?', a: 'Yes, we edit both video podcasts and master audio tracks for Spotify/Apple Podcasts.' }
        ]
      },
      {
        keyword: 'Talking Head Video Production in Noida',
        slug: 'talking-head-video-production-in-noida',
        intro: 'Position yourself as an authority. We shoot talking head video production in Noida for executives, thought leaders, and influencers, utilizing professional studio spaces, teleprompters, and smart graphics.',
        benefits: ['Teleprompter support for confident delivery', 'Perfect studio lighting and clean background options', 'Integration of visual pop-ups, titles, and slide notes'],
        faqs: [
          { q: 'I struggle with reading scripts, how can you help?', a: 'We set up eye-level teleprompters and our directors guide your speech delivery pause-by-pause.' },
          { q: 'Can we record multiple talking-head videos in one day?', a: 'Yes, you can record up to 5-10 videos in a single studio shoot block.' }
        ]
      },
      {
        keyword: 'Drone Videography Company in Noida',
        slug: 'drone-videography-company-in-noida',
        intro: 'Get stunning aerial views. Branding Hunks is a professional drone videography company in Noida, capturing 4K aerial mapping, real estate fly-throughs, commercial facilities, and event sweeps.',
        benefits: ['4K cinematic aerial footage with stabilized gimbals', 'Certified, highly experienced drone operators', 'Complete compliance with local air safety zones'],
        faqs: [
          { q: 'Are there areas where drone flights are restricted in Noida?', a: 'Yes, some government and VIP zones are red-zones. We verify permission maps beforehand.' },
          { q: 'Can you combine drone shots with ground camera shoots?', a: 'Yes, we seamlessly edit drone footage alongside cinematic ground clips.' }
        ]
      },
      {
        keyword: '3D Product Animation Company in Noida',
        slug: '3d-product-animation-company-in-noida',
        intro: 'Showcase your product from every angle. Our 3D product animation company in Noida builds detailed 3D models, textures, liquid simulations, and mechanical assembly animations that static cameras cannot capture.',
        benefits: ['Photorealistic textures and reflections', 'X-ray and exploded views showing inner engineering details', 'Fluid dynamics simulation for cosmetics, food, and beverages'],
        faqs: [
          { q: 'What files do you need for 3D animation?', a: 'We can work from CAD models, STP/IGS files, or even high-resolution product photos.' },
          { q: 'How long does a 3D product animation take?', a: 'A standard 30-second 3D animation takes between 3 to 4 weeks depending on rendering complexity.' }
        ]
      },
      {
        keyword: 'Motion Graphics Company in Noida',
        slug: 'motion-graphics-company-in-noida',
        intro: 'Elevate your screens. Branding Hunks is a creative motion graphics company in Noida, designing animated logos, visual effects, title sequences, lower thirds, and interactive video elements.',
        benefits: ['Custom branded design templates matching company style guides', 'Energetic pacing making titles and icons look modern', 'Perfect integration into live-action edits'],
        faqs: [
          { q: 'Can you design animated templates for our video editors?', a: 'Yes, we can build custom After Effects templates and Mogrt files for your internal team.' },
          { q: 'Do you create animated logo intros?', a: 'Yes, we design dynamic 2D and 3D logo reveal animations.' }
        ]
      },
      {
        keyword: 'Whiteboard Animation Company in Noida',
        slug: 'whiteboard-animation-company-in-noida',
        intro: 'Explain complex concepts in a classic, engaging format. Our whiteboard animation company in Noida designs hand-drawn explanation videos, sketch videos, and whiteboard guides that retain attention.',
        benefits: ['Engaging hand-drawn sketch styles mapping your explanations', 'Upbeat storytelling matching clear voiceovers', 'Highly effective for educational and corporate explainers'],
        faqs: [
          { q: 'Why are whiteboard animations effective?', a: 'They activate anticipation as viewers watch drawings form, leading to higher retention rates.' },
          { q: 'Do you provide the voiceover for whiteboard videos?', a: 'Yes, we offer voiceovers in multiple tones and languages matching your brand persona.' }
        ]
      }
    ]
  }
};

// Generate flat array of 60 items
export const LANDING_PAGES: LandingPageItem[] = Object.entries(CATEGORY_MAP).flatMap(([catKey, catVal]) => {
  return catVal.items.map((item, index) => {
    // Generate long-form text (500+ words) dynamically by merging templates with item specifics
    const introText = item.intro;
    
    const detailedText = `At Branding Hunks, we are passionate about the power of video to transform business outcomes. For ${item.keyword}, we construct a tailored visual funnel. Video is not just a creative medium; it is a performance asset. In modern marketing, a video must hold visual attention within the first three seconds, especially on mobile networks where users scroll rapidly. Our specialized post-production team works on precise editing beats, sound design cues, and visual typography so that your audience remains glued to the screen. We look at audio peaks, color science, and pacing to give your videos a professional edge. Whether it is a high-impact D2C campaign, a company announcement, or a location-based promo, we format files to fit your primary channels perfectly. We understand that local businesses in Noida and Delhi NCR need cost-effective content options that do not cut corners on quality. That is why our local pipeline is built to support startup founders, brand heads, and creators. We handle all elements of raw footage assembly, sound mastering, caption animations, and file deliverables, letting you focus on scaling your core operations. We ensure every frame is polished and aligned with your target values.`;

    const whyUsText = `Choosing a local partner in Noida offers immense benefits. Branding Hunks is situated at Sector 63 Noida, making it easy to coordinate, share physical files, or shoot in-studio. Unlike remote freelancers who might drop off during critical feedback rounds, we assign a dedicated account manager to your brand. Our internal team consists of highly experienced directors, copywriters, colorists, and motion graphics designers who collaborate on each script and timeline. We have worked with over 100+ brands in India, helping them cut their acquisition costs through data-driven video production. We use high-performance hardware and software to process files quickly, offering a reliable, agency-backed turnaround. Furthermore, we optimize all of our videos for local SEO and search engine visibility. Each video asset is designed to be easily read by search algorithms, with clean descriptions, thumbnail integration, and accessible caption files. By working with Branding Hunks, you are choosing a partner dedicated to your long-term creative and marketing success in Noida and the NCR region.`;

    const processText = `Our video production workflow is split into four structured stages to guarantee high-quality deliverables. First is Strategy & Scripting: we sit down with you (either virtually or at our Sector 63 studio) to understand your target audience, analyze competitor layouts, and write a high-retention script. Second is Shooting & Asset Sourcing: we cast models, setup studio backdrops, and capture high-definition 4K footage using professional cinema cameras. Third is Post-Production & Editing: our editors cut the timeline, add trending kinetic subtitles, clean up background noise, adjust color grades, and sync custom sound design. Finally, the Feedback & Launch stage: we share drafts on collaborative platforms, implement your revision notes, and deliver optimized renders matching all your target social media and e-commerce platforms.`;

    // Pick 4 videos for this landing page portfolio
    const startIdx = index % 6;
    const portfolioIds = [
      '9B_bjfsrl_k',
      'LmVL7oYGgCE',
      '_Vv3yHrFYpY',
      'd51IdYIieEg',
      'kU3NYcumKMQ',
      'uzm_jbHu_so',
      'lU3lhdKtRBQ',
      'k4hUoySQ6VE',
      '9KwCu4HpaoU',
      'Hn9MsHdHWfk',
    ].slice(startIdx, startIdx + 4);

    // Formulate final FAQs (at least 4-5 per page)
    const baseFaqs = [
      {
        question: `How does Branding Hunks stand out from other agencies offering ${item.keyword}?`,
        answer: `We do not just compile footage. We combine high-end cinema styling with performance marketing insights. Every video is engineered to capture attention, build trust, and drive viewer actions.`
      },
      {
        question: `Where is your office located, and can we visit for ${item.keyword}?`,
        answer: `Our main production studio is located at Office No. 8/2, C-4, Block-C, Rays Business Park, Sector-63, Noida. You are welcome to visit us to discuss your script, review drafts, or see our studio spaces.`
      },
      ...item.faqs.map(f => ({ question: f.q, answer: f.a })),
      {
        question: `How do we get started with Branding Hunks?`,
        answer: `It is simple! You can click "Book a Call" or "WhatsApp Us" to share your video goals, and we will get back to you with a custom project scope and transparent quote within 24 hours.`
      }
    ];

    // Build the title tag: Exact keyword + City/NCR
    const title = `${item.keyword} | Branding Hunks Noida`;
    // Meta description: ~150 chars containing the keyword
    const description = `Looking for the best ${item.keyword}? Branding Hunks in Sector 63 Noida offers high-quality, professional, and affordable video services. Book a call now!`;

    return {
      slug: item.slug,
      keyword: item.keyword,
      title,
      description,
      category: catVal.name,
      introText,
      detailedText,
      whyUsText,
      processText,
      portfolioIds,
      faqs: baseFaqs,
      benefits: item.benefits
    };
  });
});

export function getLandingPageBySlug(slug: string): LandingPageItem | undefined {
  return LANDING_PAGES.find(p => p.slug === slug);
}

export function getRelatedLandingPages(slug: string, limit = 5): LandingPageItem[] {
  const current = getLandingPageBySlug(slug);
  if (!current) return LANDING_PAGES.slice(0, limit);
  // Get other pages in the same category, then fallback to others
  const sameCat = LANDING_PAGES.filter(p => p.slug !== slug && p.category === current.category);
  const diffCat = LANDING_PAGES.filter(p => p.slug !== slug && p.category !== current.category);
  return [...sameCat, ...diffCat].slice(0, limit);
}
