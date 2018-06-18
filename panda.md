# ![Panda](https://bi-backup-3347.ccg21.dev.paypalcorp.com/static/images/logo_siri_login.png)  Document for Panda

### Demands Analysis

As Data of SRO, MRO, MRV can not be directly accessed by teamleaders/supervisors or teammates from Teradata, for those who want to view their team members' performance or self case records, there is a stone on the way. To offer an easy and intuitive access to needful data, there comes Panda!

**Based upon the major demand, Panda is a complete system to satisfy more:**

- **Overview/Introduction** of Panda to guide logged users through our system;
- **Data Center** gives a data overview based on user-defined filters, data downloading also available;
- **New Job**  let users filter then add their wanted data retrive jobs;
- **Job Library** (public/private) to manage jobs added by users;
- **TM Portal** gives user an entrance to other tools;
- **Help** to let user post their question/problem for an answer; a detailed document also located;
- **Setting**  mainly an entrance for admin to manage the whole system, includes user and job, etc.

### System Architecture

Based on raw data from Teradata, Panda makes an advanced data filtering then routes needful data to MySQL Server into schemed tables, which makes Panda's data source. Users post filter conditions from Panda's front-end to request wanted backends data, if necessary, a job can be created to retrive wanted data as wished frequency, which is the main functionality Panda focuses. To achieve above, we have the system architecture designed as below:

**System Architecture of Panda**
![System Architecture of Panda](https://engineering.paypalcorp.com/confluence/download/attachments/354148625/Panda%20-%20System%20Structure.png?version=1&modificationDate=1526897196000&api=v2)

### Functionality Design

**Within Panda there are 6 primary functions integrated:**

##### 1. Data Overview
- 1.1 Set some default filter conditions for first time page loaded display;
- 1.2 Data refresh/filter as user-defined conditions;
- 1.3 Data view based on filter conditions and column choices;
- 1.4 Data search by key words; data sort;
- 1.5 Data download.


##### 2. Create New Job

- 2.1 Wanted data filter and outcome statistics display;
- 2.2 Data Visualization, show data as chart;
- 2.3 Data Summary;
- 2.4 Create job(title,desc,mail content self-define,mail frequency filled);
- 2.5 Job preview;
- 2.6 Create job then receive related mail from Panda.


##### 3. Job Library

- 3.1 Job list display by user role or current page;
- 3.2 Job preview;
- 3.3 Job operations(Subscribe,Edit,Delete,Activiate,Publish);
- 3.4 Job search by key values/words;
- 3.5 Job sort.

##### 4. TM Portal

- 4.1 MRR TM Portal
- 4.2 SRO TM Portal
- 4.3 MRV TM Portal

##### 5. Q/A System

- 5.1 Add a new question, trigger a mail sending process to admin;
- 5.2 Reply or add a comment to special question, mail option is alternative;
- 5.3 Reply a reply or comment;
- 5.4 Question operations(like or dislike;view count;delete)
- 5.5 Question search and asynchronous refresh
- 5.6 Question category(by view,like,time,follow,staus,owner)

##### 6. Setting

- 6.1 Profile update
- 6.2 User manage(admin only),add new, delete, info modify, search...
- 6.3 Job library management

### Module Design

[Complete DB model here](https://engineering.paypalcorp.com/confluence/display/SellerBI/BI+Open+Datasets+v2.0)

#### User module
![user flow](https://github.paypal.com/SellerRiskBI/siri/blob/master/document/panda-user.PNG?raw=true)
-----

###### Add a user(only admin,api can not access from browser)
	type: "POST"
	dataType: 'json'
	url: '/account/uadmin/'
	data:
```
{"nt_id":"goood1","password":"Lockey23","first_name":"Young","last_name":"Cheng","department":"SRS","email":"iooiooi23@163.com","member_of":"SRS-BI","team":"SRS-BI","role":"admin"}
```

**return:**
```
success:
{'code': '0', 'message': 'New user added!'}
fail:
{'code': '-1', 'message': 'Failed to add user.' + str(err)}
```

-----

###### User login
	type: "POST"
	dataType: 'json'
	url: '/account/login/'
	data:
```
{'nt_id': 'goood', 'nt_password': 'Lockey23'}
```

**return:**
```
success:
{'result': 'Success', 'message': 'Login successfully.'}
fail:
{'result': 'Error', 'message': 'Username or Password is incorrect.'}
```

-----

###### User profile update
	type: "PUT"
	dataType: 'json'
	url: '/library_delete
	data:
```
{"department":"department","email":"iooiooi23@163.com","password":"Lockey23"}
```

**return:**
```
success:
{'result': 'Success', 'message': 'Modify Success!'}
fail:
{'result': 'Error', 'message': str(err)}
```
#### Data center/Job create module
-----
Data center flow

![data center flow](https://github.paypal.com/SellerRiskBI/siri/blob/master/document/data-center.PNG?raw=true)

Job create flow

![job data flow](https://github.paypal.com/SellerRiskBI/siri/blob/master/document/job-create.PNG?raw=true)
###### Create new job
	type: "POST"
	dataType: 'json'
	url: '/alert_create_submit'
	data:
```
{}
```

**return:**
```
success:
{'result': 'Success', 'message': 'Alert has been created successfully.'}
fail:
{'result': 'Error', 'message': str(msg)}
```

-----

###### Job subscribe or not
	type: "POST"
	dataType: 'json'
	url: '/job_subscribe_change'
	data:
```
{'id': id,'action':'unsubscribe'}
```

**return:**
```
success:
{'result': 'Success', 'message': 'Success'}
fail:
{'result': 'Error', 'message': str(msg)}
```

-----


###### Job publish or not
	type: "POST"
	dataType: 'json'
	url: '/job_publishd_change'
	data:
```
{'id': id,'action':'unpublish'};
```

**return:**
```
success:
{'result': 'Success', 'message': 'Success'}
fail:
{'result': 'Error', 'message': str(msg)}
```

-----


###### Job activate or not
	type: "POST"
	dataType: 'json'
	url: '/job_status_change'
	data:
```
{'id': id,'action':'deactive','is_subscribe':true}
```


**return:**
```
success:
{'result': 'Success', 'message': 'Success'}
fail:
{'result': 'Error', 'message': str(msg)}
```

-----

###### Job delete
	type: "POST"
	url: '/job_status_change'
	dataType: 'json'
	data:
```
{'id': id};
```


**return:**
```
success:
{'result': 'Success', 'message': 'Success'}
fail:
{'result': 'Error', 'message': str(msg)}
```
#### Library module
#### TM Portal module
```
https://go/mrr_tm
https://go/sro_tm
https://go/mrv_tm
```
#### Q/A module

Q/A flow
![Q/A flow](https://github.paypal.com/SellerRiskBI/siri/blob/master/document/qa.PNG?raw=true)

###### Get question list

-----

	type: "POST",
	dataType: 'json',
	url: '/get_q_a_list',
	data:
```
{
    "search":"",
    "limit":10,
    "offset":0,
    "type":type(null,my,views,likes,reply_count,if_replied)
}
```

return:
```
{
answers:[],
rows:[],
total:number
}
```
###### Add question

-----

	type: "POST",
	dataType: 'json',
	url: '/add_question',
	data:
```
{
    "question_text":questionText
}
```

return:
```
{'code': 0, 'message': 'success'}
or
{'code': -1, 'message': 'failed'}
```

###### Question view count

-----

	type: "POST",
	dataType: 'json',
	url: '/question_view_increase',
	data:
```
{
"qid":qid
}
```
return:
```
{'code': 0, 'message': 'success'}
or
{'code': -1, 'message': 'failed'}
```



###### Question set like or not

-----

	type: "POST",
	dataType: 'json',
	url: '/question_like_dislike',
	data:
```
{
    "qid":qid,
    "like":isLike
}
```


###### question set top or not

-----

{
"qid":1,
"top":true
}

###### reply a question

-----

	type: "POST",
	dataType: 'json',
	url: '/reply_question',
	data:
```
{
"qid":qid,
"mentioned":mentioned,
"reply_text":comment,
"answer_id":answer_id
}
```



###### answer set like or not

-----

	type: "POST",
	dataType: 'json',
	url: '/reply_like_dislike',
	data:
```
{
    "aid":aid,
    "like":true/false
}
```


###### Delete question or answer

-----

	type: "POST",
	dataType: 'json',
	url: '/delete_q_a',
	data:
```
{
    "id":deleteId,
    "type":deleteType,
    'qid':extraInfo
}
```


### Deployment

**To deploy Panda, a Linux Server with git,python,nginx server, MySQL Server,Client is required!**

- Step1: Create User, `sudo useradd -d /home/batch -m batch -s /bin/bash -G root && passwd batch`
- Step2: Make app dir,`mkdir /home/batch/panda`
- Step3: Get repo from github,`cd /home/batch/panda && git clone https://github.paypal.com/SellerRiskBI/siri.git`
- Step4: Run virtualenv, if necessary,`source venv/bin/activate`
- Step5: Install necessary packages,`pip install -r requirements.txt`
- Step6: Add config in nginx.conf to /etc/nginx/nginx.conf
- Step7: Collect static files,`python manage.py collectstatic`
- Step8: Migrate DB `python manage.py makemigrations panda && python manage.py migrate`
- Step9: Run UWSGI `uwsgi --ini panda_uwsgi.ini`
- Step10: Add backends crontab,`python manage.py crontab add`
- Step11: Test login use ntid with matched password.