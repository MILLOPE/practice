<?php
namespace app\controllers;

use app\m\News;
use app\m\NewsClass;
use yii\web\Controller;

class UserController extends Controller
{
    public function init() {
        $this->enableCsrfValidation = false;
    }
    function actionDo()
    {
        //echo "shenyi";
        /*\Yii::$app->response->format="json";
        $arr=["name"=>"shenyi","age"=>18];
        //echo json_encode($arr);
        return $arr;*/

        //echo $_SERVER["PATH_INFO"];
        //echo \Yii::$app->request->csrfToken;
        //echo \Yii::$app->request->getMethod();

        //echo \Yii::$app->request->get("id",0);
        //echo \Yii::$app->request->post("id",0);
        //echo \Yii::$app->request->post("name",null);

        //$body=file_get_contents("php://input");
        //echo json_decode($body)->name;

        $news=new News();
        /*$news->news_title="yii";
        $news->news_classid=3;
        $news->user_id=2;
        $news->save();*/
        //echo $news->news_id;

        //var_export($news::find()->all());
        //var_export($news::find()->where(['news_id'=>2])->one());

        //var_export($news::find()->joinWith("newsClass")->all()[1]->news_title);
        //var_export($news::find()->joinWith("newsClass")->all()[1]->newsClass->class_name);

        //var_export($news::find()->joinWith("newsClass")->createCommand()->getSql());
        echo $news::find()->count();
    }
}