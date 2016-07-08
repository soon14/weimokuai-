<?php

/**
 * Created by PhpStorm.
 * User: leon
 * Date: 15/9/6
 * Time: 上午8:50
 */
require_once dirname(__FILE__) . '/../../../lonaking_flash/FlashCommonService.php';
require_once dirname(__FILE__) .'/../task/TcTaskAdService.php';
class TcAdService extends FlashCommonService
{


    private $taskAdService;
    /**
     * AdService constructor.
     */
    public function __construct()
    {
        $this->plugin_name = 'lonaking_taskcenter';
        $this->table_name = 'lonaking_supertask_ad';
        $this->columns = 'id,uniacid,title,image,url,type,delay,createtime,updatetime';
        $this->taskAdService = new TcTaskAdService();
    }

    public function insertOrUpdate($param){
        $param['updatetime'] = time();
        if(empty($param['delay'])){
            $param['delay'] = 5;
        }
        if($param['id']){
            return $this->updateData($param);
        }else{
            $param['createtime'] = time();
            return $this->insertData($param);
        }
    }

    public function deleteById($id){
        try{
            $item = $this->selectById($id);
            pdo_delete($this->table_name, array('id'=> $id));
            $this->taskAdService->deleteByAdId($id);
        }catch (Exception $e){
            throw new Exception("无法删除，因为这条数据不存在",402);
        }
    }
}