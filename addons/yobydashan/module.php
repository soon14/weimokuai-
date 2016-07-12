<?php
/**
 * 搭讪管家模块定义
 *
 * @author Yoby
 * @url 
 */
defined('IN_IA') or exit('Access Denied');

class YobydashanModule extends WeModule {
	public function fieldsFormDisplay($rid = 0) {
		//要嵌入规则编辑页的自定义内容，这里 $rid 为对应的规则编号，新增时为 0
	}

	public function fieldsFormValidate($rid = 0) {
		//规则编辑保存时，要进行的数据验证，返回空串表示验证无误，返回其他字符串将呈现为错误提示。这里 $rid 为对应的规则编号，新增时为 0
		return '';
	}

	public function fieldsFormSubmit($rid) {
		//规则验证无误保存入库时执行，这里应该进行自定义字段的保存。这里 $rid 为对应的规则编号
	}

	public function ruleDeleted($rid) {
		//删除规则时调用，这里 $rid 为对应的规则编号
	}

	public function settingsDisplay($settings) {
		global $_GPC, $_W;
		$yobyurl = $_W['siteroot']."addons/yobydashan/";
		if(!isset($settings['img'])) {		
				$settings['img'] =$_W['siteroot']."addons/yobydashan/ui/banner.jpg";
			}
		if(!isset($settings['sexc'])) {		
				$settings['sexc'] ="外星人,哥哥,妹纸";
			}
		if(checksubmit()) {
		$cfg = array(
		'img'=>$_GPC['img'],
		'sexc'=>$_GPC['sexc'],
		);
		if($this->saveSettings($cfg)) {
				message('保存成功', 'refresh');
			}
		}
		//这里来展示设置项表单
		include $this->template('setting');
	}

}