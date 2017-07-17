FROM kitematic/hello-world-nginx:latest
RUN cd /website_files
RUN mkdir ssportal
ADD /dist/ /website_files/ssportal/

#FROM nginx:latest
#RUN cd /usr/share/nginx/html
#RUN mkdir ssportal
#RUN cd ssportal
#RUN rm index.html
#ADD /dist/ /usr/share/nginx/html/