# !/bin/sh
/bin/sed -i "s|http://localhost:8080|${API_URL}|" /usr/share/nginx/html/main.bundle.js

nginx -g 'daemon off;'