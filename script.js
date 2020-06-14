var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');
/* var params = window.location.search.replace('?','').split('&').reduce(
  function(p,e) {
    var par = e.split('=');
    p[decodeURIComponent(par[0])] = decodeURIComponent(par[1]);
    return p;
  },
  {}
); */


//var link = new URL(window.location.href);
//var site = getUrlVars("site");
//var sid1 = link.searchParams.get("sid1");
//var sid1;
//(getUrlVars("sid1") == '' || getUrlVars("sid1") == null || getUrlVars("sid1") == "[CID]") ? sid1 = 17 : sid1 = getUrlVars("sid1");
//var source = getUrlVars("source");
//var clientId = getUrlVars("client_id");
//var uid = getUrlVars("uid");
//var sid6 = getUrlVars("sid6");

function getUrlVars(key) {
	var p = window.location.search;
	p = p.match(new RegExp('[?&]{1}(?:' + key + '=([^&$#=]+))'));
	return p ? p[1] : '';
}

//$(function () {
//    $("#omni_form").removeAttr('method');
//    $("#omni_form").attr('method', 'post');
//    $("#omni_form").removeAttr('action');
//    $("#omni_form").attr('action', '../ruletka_php/omni/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//    $("#omni_form").removeAttr('method');
//	
//	
//	$("#static_omni_form").removeAttr('method');
//    $("#static_omni_form").attr('method', 'post');
//    $("#static_omni_form").removeAttr('action');
//    $("#static_omni_form").attr('action', '../ruletka_php/omni/static_send_reg.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//    $("#static_omni_form").removeAttr('method');
//
//
//    $("#aff1_form").removeAttr('method');
//    $("#aff1_form").attr('method', 'post');
//    $("#aff1_form").removeAttr('action');
//    $("#aff1_form").attr('action', '../ruletka_php/aff1/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//
//    $("#p_omni_form").removeAttr('method');
//    $("#p_omni_form").attr('method', 'post');
//    $("#p_omni_form").removeAttr('action');
//    $("#p_omni_form").attr('action', '../ruletka_php/omni/p_send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//    $("#shakes_form").removeAttr('action');
//    $("#shakes_form").attr('action', '../ruletka_php/shakes/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//    $("#apilead_form").removeAttr('action');
//    $("#apilead_form").attr('action', '../ruletka_php/apilead/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//    $("#p_apilead_form").removeAttr('action');
//    $("#p_apilead_form").attr('action', '../ruletka_php/apilead/send_rul.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//    $("#drcash_form").removeAttr('action');
//    $("#drcash_form").attr('action', '../ruletka_php/drcash/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//    $("#t_drcash_form").removeAttr('action');
//    $("#t_drcash_form").attr('action', '../ruletka_php/drcash/t_send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//    $("#adeptcpa_form").removeAttr('action');
//    $("#adeptcpa_form").attr('action', '../ruletka_php/adeptcpa/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//    $("#scpa_pw_drcash_form").removeAttr('action');
//    $("#scpa_pw_drcash_form").attr('action', '../ruletka_php/drcash/ph_sergeycpa_send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//    $("#leadtrade_form").removeAttr('action');
//    $("#leadtrade_form").attr('action', '../ruletka_php/leadtrade/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//    $("#scpa_pw_leadtrade_form").removeAttr('action');
//    $("#scpa_pw_leadtrade_form").attr('action', '../ruletka_php/leadtrade/ph_sergeycpa_send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//    $("#rocket_form").removeAttr('action');
//    $("#rocket_form").attr('action', '../ruletka_php/rocket/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//    $("#rekl_form").removeAttr('action');
//    $("#rekl_form").attr('action', '../ruletka_php/rekl/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//    $("#p_rekl_form").removeAttr('action');
//    $("#p_rekl_form").attr('action', '../ruletka_php/rekl/p_send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//    $("#hp_form").removeAttr('method');
//    $("#hp_form").attr('method', 'post');
//    $("#hp_form").removeAttr('action');
//    $("#hp_form").attr('action', '../ruletka_php/hp/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//    $("#p_hp_form").removeAttr('method');
//    $("#p_hp_form").attr('method', 'post');
//    $("#p_hp_form").removeAttr('action');
//    $("#p_hp_form").attr('action', '../ruletka_php/hp/p_send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//    $("#scpa_pw_hp_form").removeAttr('method');
//    $("#scpa_pw_hp_form").attr('method', 'post');
//    $("#scpa_pw_hp_form").removeAttr('action');
//    $("#scpa_pw_hp_form").attr('action', '../ruletka_php/hp/ph_sergeycpa_send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//    $("#pw_hp_form").removeAttr('method');
//    $("#pw_hp_form").attr('method', 'post');
//    $("#pw_hp_form").removeAttr('action');
//    $("#pw_hp_form").attr('action', '../ruletka_php/hp/sergeycpa_bushkost.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//    $("#ad1_form").removeAttr('action');
//    $("#ad1_form").attr('action', '../ruletka_php/ad1/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//    $("#scpa_pw_ad1_form").removeAttr('action');
//    $("#scpa_pw_ad1_form").attr('action', '../ruletka_php/ad1/ph_sergeycpa_send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//    $("#m_leads").removeAttr('method');
//    $("#m_leads").attr('method', 'post');
//    $("#m_leads").removeAttr('action');
//    $("#m_leads").attr('action', '../ruletka_php/m4leads/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//	$("#v_m_leads").removeAttr('method');
//    $("#v_m_leads").attr('method', 'post');
//    $("#v_m_leads").removeAttr('action');
//    $("#v_m_leads").attr('action', '../ruletka_php/m4leads/send_vitrina.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//	
//    $("#kma_form").removeAttr('method');
//    $("#kma_form").attr('method', 'post');
//    $("#kma_form").removeAttr('action');
//    $("#kma_form").attr('action', '../ruletka_php/kma/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//    $("#adbees_form").removeAttr('method');
//    $("#adbees_form").attr('method', 'post');
//    $("#adbees_form").removeAttr('action');
//    $("#adbees_form").attr('action', '../ruletka_php/adbees/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//    $("#leadbit_form").removeAttr('method');
//    $("#leadbit_form").attr('method', 'post');
//    $("#leadbit_form").removeAttr('action');
//    $("#leadbit_form").attr('action', '../ruletka_php/leadbit/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//    $("#cpagetti_form").removeAttr('method');
//    $("#cpagetti_form").attr('method', 'post');
//    $("#cpagetti_form").removeAttr('action');
//    $("#cpagetti_form").attr('action', '../ruletka_php/cpagetti/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//    $("#monsterleads_form").removeAttr('method');
//    $("#monsterleads_form").attr('method', 'post');
//    $("#monsterleads_form").removeAttr('action');
//    $("#monsterleads_form").attr('action', '../ruletka_php/monsterleads/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//
//    $("#leadgroup_form").removeAttr('method');
//    $("#leadgroup_form").attr('method', 'post');
//    $("#leadgroup_form").removeAttr('action');
//    $("#leadgroup_form").attr('action', '../ruletka_php/leadgroup/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//    $("#ha9_form").removeAttr('method');
//    $("#ha9_form").attr('method', 'post');
//    $("#ha9_form").removeAttr('action');
//    $("#ha9_form").attr('action', '../ruletka_php/ha9/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//    $("#funcpa_form").removeAttr('method');
//    $("#funcpa_form").attr('method', 'post');
//    $("#funcpa_form").removeAttr('action');
//    $("#funcpa_form").attr('action', '../ruletka_php/fun_cpa/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//
//    $("#tl_form").removeAttr('method');
//    $("#tl_form").attr('method', 'post');
//    $("#tl_form").removeAttr('action');
//    $("#tl_form").attr('action', '../ruletka_php/tl/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//    $("#burg_tl_form").removeAttr('method');
//    $("#burg_tl_form").attr('method', 'post');
//    $("#burg_tl_form").removeAttr('action');
//    $("#burg_tl_form").attr('action', '../ruletka_php/tl/send_burg.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//    $("#scpa_pw_tl_form").removeAttr('method');
//    $("#scpa_pw_tl_form").attr('method', 'post');
//    $("#scpa_pw_tl_form").removeAttr('action');
//    $("#scpa_pw_tl_form").attr('action', '../ruletka_php/tl/ph_sergeycpa_send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '&sid6=' + sid6 + '');
//
//    $("#everad_form").removeAttr('method');
//    $("#everad_form").removeAttr('action');
//	
//
//});
//
//$(function () {
//    if ($("form").is("#omni_form") || $("form").is("#p_omni_form")) {
//        $('head').append('<script src="//metrics0.com/bRIvit5XlD/d.js"></script>');
//        $('body').append('<script src="../ruletka_php/phone.js"></script>');
//    }
//});
//
//$(function () {
//
//    if ($("form").is("#monsterleads_form")) {
//
//        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//            $("#traffic_type").val("1");
//        } else {
//            $("#traffic_type").val("2");
//        }
//
//    }
//
//});
//
//$(function () {
//
//    if ($("form").is("#everad_form")) {
//        $("#everad_form").removeAttr("method");
//        $("#everad_form").removeAttr("action");
//
//        $("#everad_form").submit(function (e) {
//            e.preventDefault();
//
//            let serializeData = $("#everad_form").serializeArray();
//            let data = {};
//
//            $(serializeData).each(function (i, field) {
//                data[field.name] = field.value;
//            });
//
//            $.post("https://medic-informator-v.ru/ruletka_php/everad/send.php",
//                {
//                    name: data.name,
//                    phone: data.phone,
//                    campaign_id: data.campaign_id,
//                    sid1: data.sid1
//                },
//                function (response) {
//                    if (response == 200) {
//                        window.location.href = 'https://medic-informator-v.ru/ruletka_php/thanks/success/index.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&utm_medium=' + uid + '&sid6=' + sid6 + '';
//                    } else if (response == 400) {
//                        document.getElementById("everad_form").reset();
//                        alert("Введены неверные данные!");
//                    } else {
//                        document.getElementById("everad_form").reset();
//                        alert("Произошла ошибка!");
//                    }
//                }
//            );
//
//        });
//    }
//
//});
//
//$(function () {
//    let isFree = Number($('input[name="price"]').val());
//
//    if ($("form").is("#hp_form") || $("form").is("#p_hp_form") || $("form").is("#pw_hp_form")) {
//
//        if (source == 2) {
//            $('input[name="price"]').after('<input type="hidden" name="sub_id2" value="medicineteaser">');
//        } else if (source == 11) {
//            $('input[name="price"]').after('<input type="hidden" name="sub_id2" value="Vitrina">');
//        } else if (source == 10) {
//            $('input[name="price"]').after('<input type="hidden" name="sub_id2" value="Pushprofit">');
//        } else {
//            $('input[name="price"]').after('<input type="hidden" name="sub_id2" value="other">');
//        }
//
//        if (isFree === 0) {
//            $('.pop-up-text').append('<br><span class="text_small">*при заказе полного курса</span>');
//        }
//
//    }
//});


$(function () {
	$("a[href^='#']").click(function () {
		var _href = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(_href).offset().top + "px"
		});
		return false;
	});
	$('input[value="Узнать подробнее"], input[value="Принять участие в розыгрыше"]').click(function () {
		$('.eeee, .fadepopup').css('display', 'none');
	});
});

function spin() {
	if (!wheel.classList.contains('rotated')) {
		wheel.classList.add('super-rotation');
		setTimeout(function () {
			resultWrapper.style.display = "block";
		}, 8000);
		setTimeout(function () {
			$('.spin-wrapper').slideUp();
			$('.order_block').slideDown();
			start_timer();
		}, 10000);
		wheel.classList.add('rotated');
	}
}
setTimeout(function () {
	var flag = true;
	$(window).mouseout(function (e) {
		if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
			$('.fadepopup, .eoxp').fadeIn(300);
			$('.eeee').fadeIn(300);
			flag = false;
		}
	})
}, 6000);
var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function (e) {
	e.preventDefault();
	$('.spin-result-wrapper').fadeOut();

	var top = $('#roulette').offset().top;
	$('body,html').animate({
		scrollTop: top
	}, 800);
});

var time = 600;
var intr;

function start_timer() {
	intr = setInterval(tick, 1000);
}

function tick() {
	if (time > 0) {
		time--;
		var mins = Math.floor(time / 60);
		var secs = time - mins * 60;
		secs = secs >= 10 ? secs : "0" + secs;
		$("#min").html("0" + mins);
		$("#sec").html(secs);
	} else {
		clearInterval(intr);

	}

};
