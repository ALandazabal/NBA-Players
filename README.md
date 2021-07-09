# Mach Eight Sample Project
The following sections detail the different aspects to follow to run the application. It is reported that the following project is made on the operating system (OS) **Windows 10**.

## Requirements
* Python 3.7
* PIP -> To install it you can follow the instructions in the following link <https://pip.pypa.io/en/stable/installing/>
* PostgreSQL -> You can follow the installation steps in the following blog <https://paggyru.medium.com/install-postgresql-12-on-windows-10-for-beginners-5e8fce387dc7>
* virtualenv -> After you have **pip** on your machine, you can use the following command to install it:
```bash
pip install virtualenv
```


## Installation
After downloading the repository, a virtual environment must be created in which the project will run:

### Virtual enviroment
To create the virtual environment, proceed with the following command:

```bash
virtualenv env
```

With Windows OS, the environment is activated with the command:

```bash
\env\Scripts\activate
```

After activating the environment, we proceed to install the dependencies:

```bash
pip install -r requirements.txt
```

### Data base (DB)
After having Postgres on your machine, follow these steps:
* Create a new DB.
* Get connection data such as host, port, DB name, user and password.
* In the NBAPlayer folder of the project, change the name of the file **.envexample** to **.env**.
* Inside the **.env** file, put the corresponding connection data that is requested there.
* Save the changes.


## Execution
To run django, go to the folder called **NBA-Players** and then run the commands in the following steps:

* Verify that all migrations are created in the project:
```bash
python manage.py makemigrations
```
* Apply the migrations related to the project
```bash
python manage.py migrate
```
* If the previous steps were executed successfully, run the application with:
```bash
python manage.py runserver
```


## Testing
To run unit tests in Django, you can execute the following command:
```bash
python manage.py test
```


## Style guide
To check the styles guide PEP8 of Python, you can execute the following command:
```bash
flake8
```
