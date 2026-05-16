from django.core.management.base import BaseCommand
from catalogue.models import Category

CATEGORIES = [
    {
        'name':        'Earthing Materials',
        'slug':        'earthing-materials',
        'description': 'Copper earth rods, tapes, busbars, clamps, Classy Tech earth bus chambers, bentonite compound and complete earthing system kits for all installation types.',
        'order':       1,
    },
    {
        'name':        'Distribution Transformers',
        'slug':        'distribution-transformers',
        'description': 'Meksan oil-type distribution transformers imported directly. Available in various KVA ratings for residential, commercial and industrial applications.',
        'order':       2,
    },
    {
        'name':        'All Armoured Cables',
        'slug':        'armoured-cables',
        'description': 'SWA and AWA armoured cables in 2, 3 and 4-core configurations. Suitable for underground and heavy-duty above-ground installations.',
        'order':       3,
    },
    {
        'name':        'Feeder Pillar',
        'slug':        'feeder-pillar',
        'description': 'Outdoor electrical distribution pillars with copper busbar systems and Bussmann fuse gear for utility and industrial networks.',
        'order':       4,
    },
    {
        'name':        'Single Cables & Earthing',
        'slug':        'single-cables',
        'description': 'Coleman and premium-brand PVC single-core cables in all sizes and colours. NYAÇ earth cables on large spools also available.',
        'order':       5,
    },
    {
        'name':        'Switches & Sockets',
        'slug':        'switches-sockets',
        'description': 'ExcelUK black glass touch switches, brushed gunmetal and Cristal stone-finish socket plates. Premium residential and commercial ranges.',
        'order':       6,
    },
    {
        'name':        'Overhead Silicon Materials',
        'slug':        'overhead-silicon',
        'description': 'Silicon composite disc insulators, fuse cutout assemblies, strain clamps, suspension clamps and overhead line hardware.',
        'order':       7,
    },
    {
        'name':        'Aluminium Conductor',
        'slug':        'aluminium-conductor',
        'description': 'ACSR, AAC and AAAC aluminium conductors on large industrial spools for overhead transmission and distribution line projects.',
        'order':       8,
    },
    {
        'name':        'Chandelier & Lighting',
        'slug':        'chandelier-lighting',
        'description': 'Decorative chandeliers, LED pendants and functional commercial and residential light fittings. Contact us for current range.',
        'order':       9,
    },
]


class Command(BaseCommand):
    help = 'Seed the database with all 9 product categories'

    def handle(self, *args, **kwargs):
        created = 0
        skipped = 0

        for data in CATEGORIES:
            obj, was_created = Category.objects.get_or_create(
                slug=data['slug'],
                defaults={
                    'name':        data['name'],
                    'description': data['description'],
                    'order':       data['order'],
                    'is_active':   True,
                }
            )
            if was_created:
                created += 1
                self.stdout.write(self.style.SUCCESS(f'  Created: {obj.name}'))
            else:
                skipped += 1
                self.stdout.write(self.style.WARNING(f'  Skipped: {obj.name} (already exists)'))

        self.stdout.write(
            self.style.SUCCESS(f'\nDone. {created} created, {skipped} skipped.')
        )