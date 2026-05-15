// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.gramatr.com',
	integrations: [
		starlight({
			title: 'grāmatr docs',
			description:
				'Documentation for grāmatr — real-time intelligent context engineering. MCP integration, API reference, governance, and operations.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/gramatr' },
			],
			editLink: {
				baseUrl: 'https://github.com/gramatr/gramatr-docs/edit/main/',
			},
			head: [
				{
					tag: 'meta',
					attrs: { name: 'theme-color', content: '#3B82F6' },
				},
			],
			customCss: ['./src/styles/brand.css'],
			sidebar: [
				{
					label: 'Getting started',
					items: [
						{ label: 'What is grāmatr', slug: 'getting-started/what-is-gramatr' },
						{ label: 'The Loop in 60 seconds', slug: 'getting-started/the-loop' },
						{ label: 'Apply for access', slug: 'getting-started/apply' },
					],
				},
				{
					label: 'MCP integration',
					items: [
						{ label: 'Overview', slug: 'mcp/overview' },
						{ label: 'Claude Code setup', slug: 'mcp/claude-code' },
						{ label: 'Cursor setup', slug: 'mcp/cursor' },
						{ label: 'ChatGPT / Gemini (web)', slug: 'mcp/web-clients' },
					],
				},
				{
					label: 'API reference',
					items: [{ autogenerate: { directory: 'api' } }],
				},
				{
					label: 'Operations',
					items: [
						{ label: 'Authentication', slug: 'ops/authentication' },
						{ label: 'Rate limits', slug: 'ops/rate-limits' },
						{ label: 'Governance scopes', slug: 'ops/governance' },
					],
				},
				{
					label: 'Troubleshooting',
					items: [{ autogenerate: { directory: 'troubleshooting' } }],
				},
				{
					label: 'Changelog',
					link: '/changelog/',
				},
			],
		}),
	],
});
