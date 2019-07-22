# CeisumLabApkServe

> 为CeisumLab工具下载地图,影像数据的.pak文件架设地图服务

#### *需要node环境*
node下载地址:https://nodejs.org/zh-cn/
### gihub下载地址: (别忘了点星星)
```
https://github.com/weshmily/CeisumLabApkServe
```
### 安装依赖包
```
npm install
```

### 使用说明
我们以下载江苏地图为例
#### 使用CesiumLab下载地图---[官网地址](https://www.cesiumlab.com/)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190718162651594.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI3MTE4ODk1,size_16,color_FFFFFF,t_70)
#### 得到pak文件
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190718162806827.png)

#### 放到CeisumLabApkServe服务的pak目录
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190718163019861.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI3MTE4ODk1,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019071816311012.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI3MTE4ODk1,size_16,color_FFFFFF,t_70)
#### 开启服务(npm run serve)
在服务根目录打开cmd或者powershell
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190718165520514.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI3MTE4ODk1,size_16,color_FFFFFF,t_70)
#### 开启两个地图服务
很简单在pak文件夹放放两个.pack文件,服务会自动识别创建两个服务
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190718165931184.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI3MTE4ODk1,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190718165756353.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI3MTE4ODk1,size_16,color_FFFFFF,t_70)

看到了吗此时就会显示两个地址了

### 另外

**1.建议使用pm2启动本服务**

pm2使用说明:https://blog.csdn.net/cs380637384/article/details/82682799

**2.数据库SQLite Expert也可以打开.pak文件进行编辑**

数据库下载地址:https://1-1251311788.cos.ap-beijing-1.myqcloud.com/SQLite%20Expert.zip


## 作者
#### 作者: weshmily科技站长
#### 官网: 百度搜索([weshmily科技](http://weareshmily.top/ "weshmily科技"))
#### CSDN博客:http://blog.csdn.net/qq_27118895
#### GitHub: https://github.com/weshmily
#### 公众号:搜索"weshmilyqd"

