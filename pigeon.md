# ![Pigeon](http://10.37.104.177:8888/static/base/images/logo.png?v=7c4597ba713d804995e8f8dad448a397)  Document for Pigeon

### jupyter installation
[Follow my step here](http://blog.csdn.net/Lockey23/article/details/80247339)

	pip install jupyter

### some important settings


```
#~/.jupyter/jupyter_notebook_config.py
c.NotebookApp.ip = 'your searve ip'
c.NotebookApp.nbserver_extensions = {
    'nb2pigeon': True,
}
## The directory to use for notebooks and kernels.
c.NotebookApp.notebook_dir = u'your work dir'
c.NotebookApp.password = u'sha1:633517ad401a:7120f742f23e76bc50a15c44b516a18a71cfd0f6'#bi001
```
jupyter extesions can be found [HERE: Jupyter notebook extensions](https://github.com/ipython-contrib/jupyter_contrib_nbextensions)


plugins setting(only after extensions installed):
```
bi@bi-analytics-7525:~/.jupyter/nbconfig$ cat notebook.json 
{
  "load_extensions": {
    "pigeon-ui/main": true, 
    "echarts/main": true, 
    "nbextensions_configurator/config_menu/main": true
  }, 
  "pigeon-url": "urkidding", 
  "pigeon-server": "http://seller-bi-app-1-3593.ccg21.dev.paypalcorp.com:1255"
}
```
### Some handy packages

**eg:**

	from bi_utility import HTMLMagic
	import td_util.td_magic


**How to use them**
```
[
{
	'package':'bi_utility',
	'package postion':'/home/bi/jupyter/util/bi_utility',
	'install':'cd /home/bi/jupyter/util/bi_utility && python setup.py install'
},
{
	'package':'nb2pigeon',
	'package postion':'/home/bi/jupyter/util/nb2pigeon_install',
	'install':'cd /home/bi/jupyter/util/nb2pigeon_install && python setup.py install',
},
{
	'package':'td_util',
	'package postion':'/home/bi/jupyter/util/python-teradata/td_util',
	'install':'cd /home/bi/jupyter/util/python-teradata/td_util && python setup.py install'
}...
]
```
	
### How to deploy scheduled jobs

**scheduled jobs contain 3 parts([\*.ipynb jobs:contain specific function],[jobs.py:main program],[jobs.yaml:configuration for jobs under yaml format])**


follow procedures below you can make jobs work

- Step1: write your job for some purpose
- Step2: configure jobs that follow yaml format
- Step3: write a main program that reads job configurations then send relative mails
- Step4: add a crontab job by `crontab -e`,format as(9 22  * * * python ~/work/jobs.py > $HOME/work/job_log/jobs_`date +"\%Y-\%m-\%d"`.log)
