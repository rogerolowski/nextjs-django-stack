import pytest
from django.urls import reverse
from rest_framework import status

pytestmark = pytest.mark.api

def test_health_check(api_client):
    """Test the health check endpoint."""
    url = reverse('health-check')
    response = api_client.get(url)
    assert response.status_code == status.HTTP_200_OK
    assert response.json() == {'status': 'healthy'}

def test_protected_endpoint_requires_auth(api_client):
    """Test that protected endpoints require authentication."""
    url = reverse('protected-endpoint')
    response = api_client.get(url)
    assert response.status_code == status.HTTP_401_UNAUTHORIZED

def test_protected_endpoint_with_auth(authenticated_client):
    """Test that authenticated users can access protected endpoints."""
    url = reverse('protected-endpoint')
    response = authenticated_client.get(url)
    assert response.status_code == status.HTTP_200_OK

@pytest.mark.slow
def test_rate_limiting(api_client):
    """Test that rate limiting is working."""
    url = reverse('rate-limited-endpoint')
    
    # Make multiple requests
    for _ in range(5):
        response = api_client.get(url)
        assert response.status_code == status.HTTP_200_OK
    
    # The next request should be rate limited
    response = api_client.get(url)
    assert response.status_code == status.HTTP_429_TOO_MANY_REQUESTS 