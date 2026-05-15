from django.db import models

# Create your models here.


class Enquiry(models.Model):

    class Status(models.TextChoices):
        NEW        = 'new',        'New'
        READ       = 'read',       'Read'
        RESPONDED  = 'responded',  'Responded'
        CLOSED     = 'closed',     'Closed'

    full_name    = models.CharField(max_length=150)
    phone        = models.CharField(max_length=30)
    email        = models.EmailField(blank=True)
    category     = models.CharField(max_length=120, blank=True)
    message      = models.TextField()
    status       = models.CharField(max_length=20, choices=Status.choices, default=Status.NEW)
    submitted_at = models.DateTimeField(auto_now_add=True)
    notes        = models.TextField(blank=True, help_text='Internal notes — not visible to customer')

    class Meta:
        verbose_name_plural = 'Enquiries'
        ordering = ['-submitted_at']

    def __str__(self):
        return f'{self.full_name} — {self.category or "General"} ({self.submitted_at.strftime("%d %b %Y")})'