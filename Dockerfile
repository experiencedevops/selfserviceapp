FROM nginx
COPY dist /usr/share/nginx/html
COPY run.sh /run.sh
CMD ["bash", "/run.sh"]