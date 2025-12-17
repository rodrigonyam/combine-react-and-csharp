export const formatDate = (date) => {
  if (!date) return 'No date';
  return new Date(date).toLocaleDateString();
};

export const formatDateTime = (date) => {
  if (!date) return 'No date';
  return new Date(date).toLocaleString();
};

export const getTimeAgo = (date) => {
  if (!date) return 'Unknown';
  
  const now = new Date();
  const past = new Date(date);
  const diff = now - past;
  
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  
  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes} minutes ago`;
  if (hours < 24) return `${hours} hours ago`;
  return `${days} days ago`;
};

export const truncateText = (text, maxLength = 100) => {
  if (!text) return '';
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

export const getInitials = (firstName, lastName) => {
  return `${firstName?.[0] || ''}${lastName?.[0] || ''}`.toUpperCase();
};

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePassword = (password) => {
  return password && password.length >= 6;
};