const API_URL = 'https://crmmech.com/';

export async function loginRequest(email, password) {
  const response = await fetch(`${API_URL}/api/v1/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'password',
      username: email,
      password: password,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw errorData;
  }

  return response.json(); // access_token, refresh_token
}

export async function googleLoginRequest({ token, email, display_name }) {
  const response = await fetch(`${API_URL}/api/v1/auth/google-login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token,
      email,
      display_name,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw error;
  }

  return response.json();
}

export async function registerStep1({ email, password, language = 'uk' }) {
  const res = await fetch(`${API_URL}/api/v1/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
      language,
    }),
  });

  if (!res.ok) {
    throw await res.json();
  }

  return res.json();
}

export async function completeRegistration(data) {
  const res = await fetch(`${API_URL}/api/v1/auth/complete-registration`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw await res.json();
  }

  return res.json();
}
