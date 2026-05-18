import os
from .base import *
import dj_database_url

DEBUG = False

ALLOWED_HOSTS = env.list('DJANGO_ALLOWED_HOSTS', default=[
    'localhost',
    '127.0.0.1',
    '.onrender.com',
])

# Database — Render provides DATABASE_URL
DATABASES = {
    'default': dj_database_url.config(
        default=env('DATABASE_URL', default=''),
        conn_max_age=600,
        ssl_require=True,
    )
}

# CORS — allow the Vercel frontend
CORS_ALLOWED_ORIGINS = env.list('CORS_ALLOWED_ORIGINS', default=[])
CORS_ALLOW_ALL_ORIGINS = False

# Security
SECURE_BROWSER_XSS_FILTER      = True
SECURE_CONTENT_TYPE_NOSNIFF    = True
X_FRAME_OPTIONS                 = 'DENY'
SECURE_HSTS_SECONDS             = 31536000
SECURE_HSTS_INCLUDE_SUBDOMAINS  = True
SECURE_SSL_REDIRECT             = True
SESSION_COOKIE_SECURE           = True
CSRF_COOKIE_SECURE              = True

# Static files
STATIC_ROOT = BASE_DIR / 'staticfiles'
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'