/*!
 * Ublue jQuery Dialog
 * Copyright (c) 2011, 梦幻神化 
 * http://www.bluesdream.com
 *
 * CreateTime: 2011.10.14
 * 
 * 请保留此信息，如果您有修改或意见可通过网站给我留言，也可以通过邮件形式联系本人。
 * Mail: hello@bluesdream.com
 */
$(function(){
	var $popBtn = $(".popBtn");
	var $popLayer = $(".popLayer");
	var $maskLayer = $(".maskLayer");
	var $popLayerClose = $(".close");
	var $popLayerTop = -($popLayer.outerHeight() / 2);
	var $popLayerLeft = -($popLayer.outerWidth() / 2);
	var $pageH = $(document).height(); //IE6不支持height:100%，所以为遮罩背景设一个固定高度

	$popBtn.click(function(){ //点击按钮
		$maskLayer.css({ "height":$pageH }).show(); //显示遮罩层
		if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) { //判断IE6
			$popLayer.css({ "position":"absolute","marginLeft":( $popLayerLeft ) }).show();
		}else{
			$popLayer.css({ "marginTop":( $popLayerTop ),"marginLeft":( $popLayerLeft ) }).show();
		};
	});

	function cancelBubble(event) { //阻止事件冒泡
		event.stopPropagation();
	};
	function hideLyaer(event) {
		$popLayer.hide();
		$maskLayer.hide();
	};
	$popBtn.click(cancelBubble);
	$popLayer.click(cancelBubble);
	$popLayerClose.click(hideLyaer);
	$(document).click(hideLyaer);

});