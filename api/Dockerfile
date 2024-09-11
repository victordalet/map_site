FROM python:3.10

WORKDIR /app
COPY . /app
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
EXPOSE 3000

CMD python3 -u app.py ${DB_NAME_MYSQL} ${HOST_MYSQL} test root ${MYSQL_PORT}