var script_url = "https://script.google.com/macros/s/AKfycbwirOaKVnW7gjsOORkS9DM1WLcs8BO8FAhTqRZdNTQb5eJnVn8z/exec";
//https://script.google.com/macros/s/AKfycbwirOaKVnW7gjsOORkS9DM1WLcs8BO8FAhTqRZdNTQb5eJnVn8z/exec
//var nowasekolah ="+6281324358952";
//var namarombel =["1A","1B","2A","2B","2C","3A","3B","3C","4A","4B","5A","5B","6A","6B"];
var logosekolah = "https://3.bp.blogspot.com/-vncSgnlPc3Y/XxES3PwEFuI/AAAAAAAASC4/vjkSSyzXCqMNTCyWNOryFOJGJRGSLaFngCLcBGAsYHQ/s1600/png2-blog.png";
var namasekolahku = "SDN Ratujaya 1";
var namakotaku = "Kota Depok";
var urlsekolah = "www.sdnratujaya1.net";
//var urlspreadsheet ="https://docs.google.com/spreadsheets/d/1Vnu2eCyJrcb_8Fwb1Rzj_V_kr3nRYzoZ_VBiviYRmxQ/edit#gid=0";


//JIKA DARI LOGO DISIMPAN DI GOOGLE DRIVE PAKE PREFIKNYA DIGANTI INI:
//https://drive.google.com/uc?export=view&id=KODE ID DI GOOGLE DRIV
//document.getElementById("lamanlogin").innerHTML = "<i class='fa fa-spin fa-spinner'></i>"


/// script JQuery
$(document).ready(function () {

    var namasekolah, namakota, tekstapel, tapel
    var logo = document.getElementById("logosekolahmenu");
    logo.setAttribute("src", "https://1.bp.blogspot.com/-q57d59JTX8g/Xa-kAy6T0XI/AAAAAAAAOSo/seM01RU3Q_Q7BvLm73wC09BBsQMs05pYACLcBGAsYHQ/s320/LOGO%2BLAMASO.png");

    namasekolah = document.getElementById("namasekolah");
    namakota = document.getElementById("namakota");
    tapel = document.getElementById("tapel");

    var d = new Date();
    var blnsekarang = d.getMonth();
    var tahunsekarang = d.getFullYear();
    if (blnsekarang > 6) {
        tekstapel = tahunsekarang + "/" + parseInt(tahunsekarang) + 1;
    } else {
        tekstapel = parseInt(tahunsekarang) - 1 + "/" + tahunsekarang;
    }

    namasekolah.innerHTML = "e- LAMASO";
    namakota.innerHTML = "Guru";
    tapel.innerHTML = tekstapel;
    // cek kumpulan rombel di div login
    var url = script_url + "?action=namarombel";
    var url2 = script_url + "?action=dataguru";
    var lebarloading = document.getElementById("loaderform");
    var arrrombel = [];

    lebarloading.innerHTML = "sedang mengoleksi data guru ... ";
    lebarloading.innerHTML += "<i class='fa fa-spinner fa-spin'></i>";

    var selectnamaguru = document.frmlogin.namaguru;
    var divguru = document.getElementById("namaguru");
    divguru.innerHTML = "";
    //selectnamaguru.innerHTML="";
    // buat opsi namaguru	
    var opsiawal1 = document.createElement("option");
    opsiawal1.setAttribute("value", "Belum Pilih Nama Guru");
    opsiawal1.setAttribute("selected", "true");
    var teksopsiawal1 = document.createTextNode("Pilih Nama Guru");
    opsiawal1.appendChild(teksopsiawal1);
    selectnamaguru.appendChild(opsiawal1);
    $.getJSON(url2, function (json) {
        for (i = 0; i < json.records.length; i++) {
            var opsi = document.createElement("option");
            opsi.setAttribute("value", json.records[i].namaguru + "|" + json.records[i].kelas + "|" + json.records[i].jabatan + "|" + json.records[i].nip + "|" + json.records[i].fileContent1);
            opsi.setAttribute("style", "width:80%;height:30px");
            var teksnya = document.createElement("b");
            //				teksnya.setAttribute("onclick","document.getElementById('loginlogin').style.display='none'");
            teksnya.innerHTML = json.records[i].namaguru;
            opsi.appendChild(teksnya);
            selectnamaguru.appendChild(opsi);
            if (json.records[i].jabatan == "Kepala Sekolah") {
                document.getElementById("namakepsek").innerHTML = json.records[i].namaguru;
                document.getElementById("nipkepsek").innerHTML = json.records[i].nip;
            }

        }

        lebarloading.innerHTML = "";
        lebarloading.innerHTML = "sedang mengoleksi data kelas (Anda bisa langsung login) ... ";
        lebarloading.innerHTML += "<i class='fa fa-spinner fa-spin'></i>";

    })

    // BUAT OPSI AWALAN
    var selectkelas = document.frmlogin.kelasguru;
    selectkelas.innerHTML = "";
    var opsiawal = document.createElement("option");
    opsiawal.setAttribute("value", "Belum Pilih Kelas");
    opsiawal.setAttribute("selected", "true");

    var teksopsiawal = document.createTextNode("Pilih Nama Anda Dulu");
    opsiawal.appendChild(teksopsiawal);
    selectkelas.appendChild(opsiawal);



    var logo2 = document.getElementById("frmlogo");
    logo2.setAttribute("class", "w3-circle");
    logo2.setAttribute("style", "width:90px;height:90px;border:2px dotted blue");
    logo2.setAttribute("src", "https://1.bp.blogspot.com/-q57d59JTX8g/Xa-kAy6T0XI/AAAAAAAAOSo/seM01RU3Q_Q7BvLm73wC09BBsQMs05pYACLcBGAsYHQ/s320/LOGO%2BLAMASO.png");
    var logo3 = document.getElementById("logo3");
    logo3.setAttribute("class", "w3-circle");
    logo3.setAttribute("style", "width:90px;height:90px;border:2px dotted blue");
    logo3.setAttribute("src", "https://1.bp.blogspot.com/-q57d59JTX8g/Xa-kAy6T0XI/AAAAAAAAOSo/seM01RU3Q_Q7BvLm73wC09BBsQMs05pYACLcBGAsYHQ/s320/LOGO%2BLAMASO.png");

    // panggil data untuk melihat nama-nama rombel kelas di spreadsheet google drive.
    var opsidipreviewhp = document.getElementById("previewpilihkelas");
    opsidipreviewhp.innerHTML = ""
    $.getJSON(url, function (jsonrombel) {
        for (var i = 0; i < jsonrombel.records.length; i++) {

            var opsi = document.createElement("option");
            opsi.setAttribute("value", jsonrombel.records[i].name);
            var teksopsi = document.createTextNode(jsonrombel.records[i].name);
            opsi.appendChild(teksopsi);

            opsidipreviewhp.appendChild(opsi); // buat opsi di priviewhp
        }
        lebarloading.innerHTML = "";
    })
    // buat element opsi di beberapa tempat


    document.getElementById("modallogin").style.display = "block";
    $("#previewlogohp").hide();
    $("#previewloginsiswa").hide();

    // Timer
    (function ($) {
        $.extend({
            APP: {
                formatTimer: function (a) {
                    if (a < 10) {
                        a = '0' + a;
                    }
                    return a;
                },
                startTimer: function (dir) {
                    var a;
                    // save type
                    $.APP.dir = dir;
                    // get current date
                    $.APP.d1 = new Date();
                    switch ($.APP.state) {
                        case 'pause':
                            // resume timer
                            // get current timestamp (for calculations) and
                            // substract time difference between pause and now
                            $.APP.t1 = $.APP.d1.getTime() - $.APP.td;
                            break;
                        default:
                            // get current timestamp (for calculations)
                            $.APP.t1 = $.APP.d1.getTime();
                            // if countdown add ms based on seconds in textfield
                            if ($.APP.dir === 'cd') {
                                $.APP.t1 += parseInt($('#cd_seconds').val()) * 60000;
                            }
                            break;
                    }
                    // reset state
                    $.APP.state = 'alive';
                    $('#' + $.APP.dir + '_status').html('Durasi Waktu Masih Berjalan');
                    // start loop
                    $.APP.loopTimer();
                },
                pauseTimer: function () {
                    // save timestamp of pause
                    $.APP.dp = new Date();
                    $.APP.tp = $.APP.dp.getTime();
                    // save elapsed time (until pause)
                    $.APP.td = $.APP.tp - $.APP.t1;
                    // change button value
                    $('#' + $.APP.dir + '_start').val('Berhenti dari Jeda');
                    // set state
                    $.APP.state = 'pause';
                    $('#' + $.APP.dir + '_status').html('Jeda');
                },
                stopTimer: function () {
                    // change button value
                    $('#' + $.APP.dir + '_start').val('Mulai Lagi');
                    // set state
                    $.APP.state = 'stop';
                    $('#' + $.APP.dir + '_status').html('Selesai');
                },
                resetTimer: function () {
                    // reset display
                    $('#' + $.APP.dir + '_ms,#' + $.APP.dir + '_s,#' + $.APP.dir + '_m,#' + $.APP.dir + '_h').html('00');
                    // change button value
                    $('#' + $.APP.dir + '_start').val('Mulai Lagi!');
                    // set state
                    $.APP.state = 'reset';
                    $('#' + $.APP.dir + '_status').html('Setel ulang waktu untuk mengerjakan');
                },
                endTimer: function (callback) {
                    // change button value
                    $('#' + $.APP.dir + '_start').val('Mulai Lagi');
                    // set state
                    $.APP.state = 'end';
                    // invoke callback
                    if (typeof callback === 'function') {
                        callback();
                        //$("#nilaiku").show();
                        // tambahan
                        hasilakhirelamaso();
                    }
                },
                loopTimer: function () {
                    var td;
                    var d2, t2;
                    var ms = 0;
                    var s = 0;
                    var m = 0;
                    var h = 0;
                    if ($.APP.state === 'alive') {
                        // get current date and convert it into 
                        // timestamp for calculations
                        d2 = new Date();
                        t2 = d2.getTime();
                        // calculate time difference between
                        // initial and current timestamp
                        if ($.APP.dir === 'sw') {
                            td = t2 - $.APP.t1;
                            // reversed if countdown
                        } else {
                            td = $.APP.t1 - t2;
                            if (td <= 0) {
                                // if time difference is 0 end countdown
                                $.APP.endTimer(function () {
                                    $.APP.resetTimer();
                                    $('#' + $.APP.dir + '_status').html('Ulangi Latihan');
                                });
                            }
                        }
                        // calculate milliseconds
                        ms = td % 1000;
                        if (ms < 1) {
                            ms = 0;
                        } else {
                            // calculate seconds
                            s = (td - ms) / 1000;
                            if (s < 1) {
                                s = 0;
                            } else {
                                // calculate minutes   
                                var m = (s - (s % 60)) / 60;
                                if (m < 1) {
                                    m = 0;
                                } else {
                                    // calculate hours
                                    var h = (m - (m % 60)) / 60;
                                    if (h < 1) {
                                        h = 0;
                                    }
                                }
                            }
                        }
                        // substract elapsed minutes & hours
                        ms = Math.round(ms / 100);
                        s = s - (m * 60);
                        m = m - (h * 60);
                        // update display
                        $('#' + $.APP.dir + '_ms').html($.APP.formatTimer(ms));
                        $('#' + $.APP.dir + '_s').html($.APP.formatTimer(s));
                        $('#' + $.APP.dir + '_m').html($.APP.formatTimer(m));
                        $('#' + $.APP.dir + '_h').html($.APP.formatTimer(h));
                        // loop
                        $.APP.t = setTimeout($.APP.loopTimer, 1);
                    } else {
                        // kill loop
                        clearTimeout($.APP.t);
                        return true;

                    }

                }

            }

        });


        // $('#cd_start').live('click', function() { //LAMASO ASLI
        $('#cd_start').click(function () { //LAMASO ASLI
            $.APP.startTimer('cd');
        });
        //$('#timermulai').live('click', function() { //LAMASO ASLI
        $('#timermulai').click(function () { //LAMASO ASLI
            $.APP.startTimer('cd');
        });
        //$('#cd_stop').live('click', function() { //LAMASO ASLI
        $('#cd_stop').click(function () { //LAMASO ASLI
            //$.APP.stopTimer();
            $.APP.resetTimer();
        });

        //$('#cd_reset').live('click', function() {
        $('#cd_reset').click(function () { //LAMASO ASLI
            $.APP.resetTimer();
        });

        //$('#cd_pause').live('click', function() {
        $('#cd_pause').click(function () { //LAMASO ASLI
            $.APP.pauseTimer();
        });

    })(jQuery);

})
$("#tombolback").click(function () {
    var inputtoken = document.getElementById("previewtoken");
    var inputgurutoken = document.getElementById("idtoken");
    var kontengambar = document.getElementById("previewlogohp");
    var loginsiswa = document.getElementById("previewloginsiswa");
    var previewhtml = document.getElementById("materiimport");
    var divinput = document.getElementById("output");
    var divprivewhp = document.getElementById("materiimport");
    var divlayardepanhp = document.getElementById("layardepan");
    kontengambar.style.display = "block";
    loginsiswa.style.display = "block";
    previewhtml.style.display = "none";
    divlayardepanhp.style.display = "none";
})

function tombollain() {
    var tbl = document.getElementById("tabel_data_token");
    var namamapel = tbl.rows[1].cells[1].innerHTML;

    $("#tabel_data_analisis").table2excel({
        //exclude: ".excludeThisClass",
        //name: "Worksheet Name",
        //filename: "SomeFile.xls", // do include extension
        //preserveColors: true // set to true if you want background colors and font colors preserved
        name: "Worksheet Name",
        filename: "Data Analisis Soal PG " + namamapel + " " + new Date(),
        fileext: ".xls",
        exclude_img: true,
        exclude_links: true,
        exclude_inputs: true,
        preserveColors: true
    });
}

function buattabelspreadsheetTTTTT() {
    var tabel = document.getElementById("tabel_data_analisis")
    var obj = tableToObj(tabel)
    resultresult.innerHTML = JSON.stringify(obj);
    console.log(obj.length);
}

function buattabelspreadsheet() {

}

function buattabelspreadsheetONLIN() {
    var tabel = document.getElementById("tabel_data_analisis")
    var obj = tableToObj(tabel);
    //var sendObj = new URLSearchParams(JSON.stringify(obj));
    var sendObj = encodeURIComponent(JSON.stringify(obj));

    var url = "https://script.google.com/macros/s/AKfycbwLeZkdqHemahH9oJbNqTVWQ4kQoE71QfwwCMYUZGw_4926zDTT/exec?action=lihatnilai"; //+sendObj;// + kirimdataini;
    var xhr = new XMLHttpRequest
    xhr.open("POST", url, true)
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4 && xhr.status === 200) {

            resultresult.innerHTML = "Terima Kasih, Ananda telah menyelesaikan pembelajaran ini dengan hasil:<br/>Skor PG = " + xhr.responseText;

        }
    };
    // url encode form data for sending as post data

    xhr.send(sendObj);



}

function tableToObj(table) {
    var trs = table.rows,
        trl = trs.length,
        i = 0,
        j = 0,
        keys = [],
        obj, ret = [];

    for (; i < trl; i++) {
        if (i == 0) {
            for (; j < trs[i].children.length; j++) {
                keys.push(trs[i].children[j].innerHTML);
            }
        } else {
            obj = {};
            for (j = 0; j < trs[i].children.length; j++) {
                obj[keys[j]] = trs[i].children[j].innerHTML;
            }
            ret.push(obj);
        }
    }

    return ret;
};
// bukan JQuery
function previewriwayat(id) {
    //document.getElementById("output").innerHTML="<i class='fa fa-spin fa-spinner'></i>";
    document.getElementById('modalpetunjuk').style.display = 'block';
    document.getElementById("judulpetunjuk").innerHTML = "<i class='fa fa-spin fa-spinner'></i>";

    var idm = encodeURIComponent(id);
    var en = "idmateri=" + idm;
    var url = script_url + "?" + en + "&action=previewriwayat";

    $.getJSON(url, function (json) {
        //$("#output").html(brkline(json))
        document.getElementById("judulpetunjuk").innerHTML = "Preview e-Lamaso";
        document.getElementById("isipetunjuk").innerHTML = brkline(json);
        var elEssay = document.getElementsByClassName("soalessay")
        if (elEssay.length !== 0) {
            for (i = 0; i < elEssay.length; i++) {
                var idEl = elEssay[i].getAttribute("id");
                var inidEl = idEl.replace("essay", "");
                var tempattombol = document.getElementById("tomboljawaban" + inidEl);
                var tombolsatu = document.createElement("button");
                tombolsatu.setAttribute("onclick", "tombolketikjawaban('" + inidEl + "')");
                var tekstombolsatu = document.createTextNode("Ketik Jawaban No " + inidEl);
                tombolsatu.appendChild(tekstombolsatu);
                tempattombol.appendChild(tombolsatu);
                tempattombol.innerHTML += "<br/><sub>atau</sub></br/> "
                var tomboldua = document.createElement("button");
                tomboldua.setAttribute("onclick", "tomboluploadjawaban('" + inidEl + "')");
                var tekstomboldua = document.createTextNode("Upload Jawaban No " + inidEl);
                tomboldua.appendChild(tekstomboldua);
                tempattombol.appendChild(tomboldua);
                tempattombol.innerHTML += "<br/><sub>Pilih Salah satu cara Kalian menjawab soal ini</sub>"

            }
        }


    })

}

function cektugasdansoal() {
    //Cek nosoalPG
    output.innerHTML = ""
    var nosoal = document.getElementsByClassName("calcnosoal");
    var opsiclac = document.getElementsByClassName("calc");
    var essayclac = document.getElementsByClassName("soalessay");
    cektagihan.innerHTML = "Jumlah soal PG: " + nosoal.length + " butir soal. <hr style='border-top:1px solid blue'/>";
    // ---------- Cek No soal Duplikat
    var koleksnosoal = [];
    var nosoalduplikat = [];
    for (var a = 0; a < nosoal.length; a++) {
        if (koleksnosoal.indexOf(nosoal[a].getAttribute("id")) < 0) {
            koleksnosoal.push(nosoal[a].getAttribute("id"));
        } else {
            nosoalduplikat.push(nosoal[a].getAttribute("id"))
        }
    }

    //----------- Beri Keterangan No soal yang duplikat 
    var infonosoalduplikat = "";
    if (nosoalduplikat.length > 0 && nosoal.length > 0) {
        infonosoalduplikat = "Penulisan Kode No Soal: <span style='color:red'>Kode Nomor Soal PG yang duplikat, yaitu No : (" + nosoalduplikat.join(', ') + "), segera perbaiki sumber materi Anda agar e-Lamaso mampu membaca nilai yang diperoleh siswa. </span> "
    } else if (nosoalduplikat.length == 0 && nosoal.length > 0) {
        infonosoalduplikat = "Penulisan Kode No Soal: <span style='color:blue'>Bagus, tidak ada kode Nomor Soal yang duplikat.</span>"
    } else {
        infonosoalduplikat = "";
    }

    // ---------- Cek Kode Opsi Duplikat

    //----------- Beri Keterangan Kode ID yang duplikat 
    var opsiduplikat = [];
    var koleksiduplikat = [];
    for (x = 0; x < opsiclac.length; x++) {
        //cektagihan.innerHTML += opsiclac[x].getAttribute("id") + "<br>";
        if (opsiduplikat.indexOf(opsiclac[x].getAttribute("id")) < 0) {
            var hapusspasi = opsiclac[x].getAttribute("id").replace(/\s+/g, "")
            opsiduplikat.push(hapusspasi)
        } else {
            var hapusspasi = opsiclac[x].getAttribute("id").replace(/\s+/g, "")
            koleksiduplikat.push(hapusspasi)
        }

    }


    //cektagihan.innerHTML += "Jumlah Koleksi Opsijawaban: " + opsiduplikat.length +" ("+opsiduplikat+"), dan jumlah opsi duplikat: " + koleksiduplikat.length +" ("+koleksiduplikat+")<br/>";

    var infoteksduplikat = ""; // opsi pilihan ganda yang duplikat
    if (koleksiduplikat.length > 0 && nosoal.length > 0) {
        infoteksduplikat = "Penulisan Kode Opsion Pilihan Ganda : <span style='color:red'>Kode ID opsion PG duplikat, opsion : (" + koleksiduplikat.join(', ') + "), ini akan mempengaruhi nilai siswa.</span> "
    } else if (koleksiduplikat.length == 0 && nosoal.length > 0) {
        infoteksduplikat = "Penulisan Kode Opsion Pilihan Ganda : <span style='color:blue'>Bagus, tidak ditemukan kode ID opsion jawaban PG duplikat.</span>"
    } else {
        infoteksduplikat = "<hr style='border-top:1px solid blue'>"
    }
    cektagihan.innerHTML += infonosoalduplikat + "<br/>" + infoteksduplikat;

    cektagihan.innerHTML += "<hr style='border-top:1px solid blue'> Jumlah Soal Essay : " + essayclac.length + " Soal. ";
    //===============
    var essayduplikat = [];
    var koleksiessayduplikat = [];
    for (x = 0; x < essayclac.length; x++) {
        //cektagihan.innerHTML += opsiclac[x].getAttribute("id") + "<br>";
        if (essayduplikat.indexOf(essayclac[x].getAttribute("id")) < 0) {
            var hapusspasi = essayclac[x].getAttribute("id").replace(/\s+/g, "")
            essayduplikat.push(hapusspasi)
        } else {
            var hapusspasi = essayclac[x].getAttribute("id")
            koleksiessayduplikat.push(hapusspasi)
        }

    }
    //cektagihan.innerHTML += "Jumlah Koleksi Essay: " + essayduplikat.length +" ("+essayduplikat.join(', ')+"), dan jumlah essay duplikat: " + koleksiessayduplikat.length +" ("+koleksiessayduplikat.join(', ')+")<br/>";
    if (koleksiessayduplikat.length == 0 && essayclac.length > 0) {
        cektagihan.innerHTML += "<span style='color:blue'> (tidak ditemukan nomor soal essay duplikat)</span><hr style='border-top:1px solid blue'>"
    } else if (koleksiessayduplikat.length > 0 && essayclac.length > 0) {
        cektagihan.innerHTML += "<span style='color:red'> Nomor Essay Duplikat = " + koleksiessayduplikat.join(', ') + "</span><hr style='border-top:1px solid blue'>";
    } else {
        cektagihan.innerHTML += "";
    }
    //===============
    var potoessayjawaban = document.getElementsByClassName("potoessay");
    cektagihan.innerHTML += "Jumlah Tombol Upload untuk essay ada : " + potoessayjawaban.length + " buah.<br/>";
    for (y = 0; y < potoessayjawaban.length; y++) {
        cektagihan.innerHTML += "Tombol Upload (Poto/Media) ke-" + (y + 1) + " untuk No: "
        var nosoalpotoini = potoessayjawaban[y].getAttribute("id").split("/");
        for (z = 0; z < nosoalpotoini.length; z++) {
            cektagihan.innerHTML += nosoalpotoini[z] + ", "
        }
        cektagihan.innerHTML += "<br/>"
    }
    cektagihan.innerHTML += "<hr style='border-top:1px solid red'/>";
    var keybase = tttkeybase.innerHTML
    if (keybase.length > 0) {
        var kuncijawaban = window.atob(keybase);
        cektagihan.innerHTML += "Kode Kunci Jawaban:  <b><em>" + keybase + "</em></b>, translate Kode Kunci Jawaban =" + kuncijawaban + "<hr style='border-top:1px solid red'/>";
    } else {
        cektagihan.innerHTML += "Tidak ditemukan kunci jawaban <hr style='border-top:1px solid red'/>";
    }
}

function prttteviewriwayat(id) { // gagal

    document.getElementById("output").innerHTML = "<i class='fa fa-spin fa-spinner'></i>";

    var idm = encodeURIComponent(id);
    var en = "idmateri=" + idm;
    var url = script_url + "?action=previewriwayat&" + en;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    //xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4 && xhr.status === 200) {
            var brk = decodeURIComponent(xhr.responseText);
            var teks;
            document.getElementById("output").innerHTML = brk;
            document.getElementById("output2").textContent = xhr.responseText;

        }
    }
    xhr.send()
}

function previewriwayaet(id) { //gagal

    document.getElementById("output").innerHTML = "<i class='fa fa-spin fa-spinner'></i>";
    var idm = encodeURIComponent(id);
    var url = script_url + "?callback=prevlamaso&idmateri=" + idm + "&action=previewriwayat";
    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });


}

function prevlamaso(e) {
    var teks = decodeURIComponent(e.result);
    $("#output").html(e.result)
}

function riwayatmateri() {
    //jika ingin menampilkan riwayat materi, maka data di elemen id=materiimport dan/atau di id=output harus dihapus, sebab akan mempengaruhi klik opsi jawaaban
    var divmateriimport = document.getElementById("materiimport");
    var divoutput = document.getElementById("output");
    divmateriimport.innerHTML = "";
    divoutput.innerHTML = "";

    var kelas = document.getElementById("kelassayapilih").innerHTML;
    var divKontenmateri = document.getElementById("kontenriwayatmateri");
    divKontenmateri.innerHTML = "Berikut adalah riwayat materi pembelajaran kelas " + kelas + " :<br/>"
    var url = script_url + "?action=riwayatmateri";
    $.getJSON(url, function (json) {

        var tabel = document.createElement("table")
        tabel.setAttribute("class", "versi-table");
        tabel.setAttribute("id", "tabel_riwayat_materi");
        var tr = tabel.insertRow(0);
        var th = document.createElement("th");
        th.innerHTML = "Tanggal";
        var th2 = document.createElement("th");
        th2.innerHTML = "Preview";
        var th3 = document.createElement("th");
        th3.innerHTML = "Kode Token";
        var th4 = document.createElement("th");
        th4.innerHTML = "Dipublikasikan Tanggal";
        var th5 = document.createElement("th");
        th5.innerHTML = "Mapel/Tema";
        var th6 = document.createElement("th");
        th6.innerHTML = "Frekuensi Akses";
        var th7 = document.createElement("th");
        th7.innerHTML = "Durasi";
        var th8 = document.createElement("th");
        th8.innerHTML = "Jumlah PG";
        var th9 = document.createElement("th");
        th9.innerHTML = "Jumlah Essay";
        tr.appendChild(th);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(th4);
        tr.appendChild(th5);
        tr.appendChild(th6);
        tr.appendChild(th7);
        tr.appendChild(th8);
        tr.appendChild(th9);

        for (i = 0; i < json.records.length; i++) {
            if (json.records[i].idkelas == kelas) {
                var tr = tabel.insertRow(1);
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = new Date(json.records[i].Time_Stamp).toLocaleString();
                var tabCell = tr.insertCell(-1);
                var btn = document.createElement("button");
                btn.setAttribute("onclick", "previewriwayat('" + json.records[i].idmateri + "')")
                btn.innerHTML = "Preview";
                tabCell.appendChild(btn);
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = json.records[i].idtoken;
                var tabCell = tr.insertCell(-1);
                var idtg = json.records[i].crtToken;
                tabCell.innerHTML = formattanggallengkap(idtg);
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = json.records[i].idmapel;
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = json.records[i].idaksessiswa;
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = json.records[i].iddurasi + " menit.";
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = json.records[i].jumlahpg;
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = json.records[i].jumlahessay;

            }
        }
        divKontenmateri.appendChild(tabel);
    })
}

function formattanggallengkap(xxx) {
    // misal idtoken = 01092020
    var idtoken = xxx;
    var namabulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    var tgl = idtoken.slice(0, 2); // 01
    var bulan = deleteZero(idtoken.slice(2, 4)); // 09 --> 9, kalo 10 ya tetep 10
    var tahun = idtoken.slice(4, 8)

    return tgl + " " + namabulan[bulan - 1] + " " + tahun + " Pukul 07:00 WIB";

}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    };
    return i;
}

function deleteZero(i) {
    if (i.slice(0, 1) == "0") {
        i = i.slice(1, 2);
    };
    return i;
}

function konverttgl() {
    var intgl = document.getElementById("idtgl").value.toLocaleString();
    var valcrttokn = document.formuploadmateri.crtToken;
    var tekstgl = lentanggal(intgl);
    if (intgl.indexOf("-") > 0) {
        var splittekstgl = intgl.split("-");
    } else {
        var splittekstgl = intgl.split("/");
    }
    valcrttokn.value = splittekstgl[2] + "" + splittekstgl[1] + "" + splittekstgl[0];
}

function uploadfiletxtlagi() {
    var formulir = document.formuploadmateri
    formulir.style.display = "block";
    //==========================
    document.getElementById("divceklis").style.display = "block";
    document.getElementById("divsayasetuju").style.display = "block";


    document.getElementById("kirimmaterikeserver").style.display = "block"
    document.getElementById("kirimmaterikeserver").removeAttribute("onclick");
    document.getElementById("kirimmaterikeserver").setAttribute("onclick", "persiapanuploadkonten()");
    document.getElementById("judulformunggah").innerHTML = "Materi Berhasil Dipublikasikan<br/>";

    var divprivewhp = document.getElementById("materiimport");
    divprivewhp.style.display = "block";

    var divlayardepanhp = document.getElementById("layardepan");
    divlayardepanhp.style.display = "block";
    var inputtoken = document.getElementById("previewtoken");
    inputtoken.value = "";
    var kontengambar = document.getElementById("previewlogohp");
    kontengambar.style.display = "none";
    var loginsiswa = document.getElementById("previewloginsiswa");
    loginsiswa.style.display = "none"
    var divmateriimport = document.getElementById("materiimport");
    divmateriimport.style.display = "none"

    //Disini fungsi untuk memanggil riwayat materi
    document.formuploadmateri.idkelas.value = document.getElementById("kelassayapilih").innerHTML;
    document.getElementById("namafileupload").innerHTML = "";
    document.getElementById("resultlink").innerHTML = "";


}

function persiapanuploadkonten() {
    $("#kirimmaterikeserver").html("<i class='fa fa-spin fa-spinner'><i>")
    var namaformt = document.formuploadmateri;
    output.innerHTML = "";
    var nosoal = document.getElementsByClassName("calcnosoal");
    var essayclac = document.getElementsByClassName("soalessay");
    namaformt.jumlahpg.value = nosoal.length;
    namaformt.jumlahessay.value = essayclac.length;

    var namaform = document.formuploadmateri;
    var koleksdata = KoleksiFormSiswa(namaform);
    var en = submitsiswa(namaform);

    document.getElementById("kirimmaterikeserver").removeAttribute("onclick");
    document.getElementById("kirimmaterikeserver").setAttribute("onclick", "alert('Maaf, Sedang Proses ... ')");
    //document.getElementById("resultpoto").innerHTML = en;
    //---------------------------------------
    //var x = document.frmeditpoto.idguru;
    //var url = script_url+"?callback=linktxt&action=uploadmateri";
    var url = script_url + "?action=uploadmateri";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    //xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("kirimmaterikeserver").innerHTML = "Publikasikan";
            document.getElementById("kirimmaterikeserver").style.display = "none";
            //document.getElementById("resultlink").innerHTML = "Data berhasil diupload. Anda hanya dapat mengedit tanggal publikasinya.<br/>Cek Riwayat Materi Anda.";
            document.getElementById("resultlink").innerHTML = xhr.responseText;

            document.getElementById("divceklis").style.display = "none";
            document.getElementById("divsayasetuju").style.display = "none";



            document.getElementById("judulformunggah").innerHTML = "Materi Berhasil Dipublikasikan<br/>";
            var btntambah = document.createElement("button");
            btntambah.setAttribute("onclick", "uploadfiletxtlagi()");
            btntambah.innerHTML = "Upload Materi lagi";
            document.getElementById("judulformunggah").appendChild(btntambah);

            var divprivewhp = document.getElementById("materiimport");
            divprivewhp.style.display = "none";
            divprivewhp.innerHTML = "Untuk melihat preview sesuai token, lihat di Riwayat Materi";

            var divlayardepanhp = document.getElementById("layardepan");
            divlayardepanhp.style.display = "block";
            var inputtoken = document.getElementById("previewtoken");
            inputtoken.value = "";
            var kontengambar = document.getElementById("previewlogohp");
            kontengambar.style.display = "none";
            var loginsiswa = document.getElementById("previewloginsiswa");
            loginsiswa.style.display = "none"

            document.formuploadmateri.reset();
            document.formuploadmateri.idkelas.value = document.getElementById("kelassayapilih").innerHTML;
            document.getElementById("namafileupload").innerHTML = "";
            document.formuploadmateri.style.display = "none";
            var ceklis = document.getElementById("sayasetuju").checked = false;
            sayasetuju();
            //Disini fungsi untuk memanggil riwayat materi
            riwayatmateri();
        }
    };
    // url encode form data for sending as post data

    xhr.send(en);
    //---------------------------------------
    //document.getElementById("sembunyi").disabled=true;

}

function KoleksiFormSiswa(form) {
    //--------- mendefinisikan beberapa element
    var koleksielement = form.elements;
    //--------- element yang digunakan untuk element spam
    var koleksispam;


    var bidangdata = Object.keys(koleksielement).filter(function (k) {
        if (koleksielement[k].name === "koleksispam") {
            koleksispam = koleksielement[k].value;
            return false;
        }
        return true;
    }).map(function (k) {
        if (koleksielement[k].name !== undefined) {
            return koleksielement[k].name;
        } else if (koleksielement[k].length > 0) {
            return koleksielement[k].item(0).name;
        }
    }).filter(function (item, pos, self) {
        return self.indexOf(item) == pos && item;
    });

    var Dataform = {};
    bidangdata.forEach(function (name) {
        var element = koleksielement[name];
        // jika datanya memiliki satu nilai (value), biasanya berupa teks dalam value.
        Dataform[name] = element.value;

        // ketika data value-nya bukan teks, seperti value pada tag input type radio, atau tag select, maka dibuatkan array lagi dengan fungsi tambah array [.push('new Array')
        if (element.length) {
            var data = [];
            for (var i = 0; i < element.length; i++) {
                var item = element.item(i);
                if (item.checked || item.selected) {
                    data.push(item.value);
                }
            }
            Dataform[name] = data.join(', ');
        }
    });

    Dataform.formDataNameOrder = JSON.stringify(bidangdata);
    //Dataform.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    //Dataform.formGoogleSendEmail = form.dataset.email || ""; // no email by default

    return {
        data: Dataform,
        koleksispam: koleksispam
    };
}

function submitsiswa(form) { // handles form submit without any jquery

    var formData = KoleksiFormSiswa(form); // getFormData(form);
    var data = formData.data;

    // If a honeypot field is filled, assume it was done so by a spam bot.
    if (formData.koleksispam) {
        return false;
    }

    // disableAllButtons(form);
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function (k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    //xhr.send(encoded);
    return encoded;
}

function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = "Sedang Proses";
        buttons[i].disabled = true;
    }
}

function tesambiltxt() {
    document.getElementById("namafileupload").innerHTML = "<i class='fa fa-spin fa-spinner'></i>";
    var url = "https://script.google.com/macros/s/AKfycbw6d1aN6I8im7JIHo5Vbr20smTCwaSbHzkXvg9olPN1NXWEaRzs/exec";
    var request = jQuery.ajax({
        crossDomain: true,
        url: url + "?callback=testxt",
        method: "GET",
        dataType: "jsonp"
    });

}

function testxt(e) {
    var teks = decodeURIComponent(e.result);
    $("#output").html(brkline(teks));
    //$("#re").html(e.result);
    //document.getElementById("output").innerHTML=e.result;	
    document.getElementById("namafileupload").innerHTML = "";
}

function cobauploadtxt() { //berhasil ditest, tapi ga dipake
    var data = encodeURIComponent(document.getElementById("basetxt").value);

    var url = "https://script.google.com/macros/s/AKfycbw6d1aN6I8im7JIHo5Vbr20smTCwaSbHzkXvg9olPN1NXWEaRzs/exec";
    ////////////////////////////
    //var x = document.frmeditpoto.idguru;
    var url = url + "?callback=linktxt";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    //xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("resultlink").innerHTML = xhr.responseText;

        }
    };
    // url encode form data for sending as post data

    xhr.send("basetxt=" + data);
    ///////////////////////////////////////////////////

}

function linktxt(e) { //berhasil ditest, tapi ga dipake
    $("#resultlink").html(e.result);
    $("#materiimport").html(e.result);
}

function unggahmateri() { // upload offline atau ambil file dari drive PC/root HP
    var isimapel = document.formuploadmateri.idmapel.value;
    var isitanggal = document.formuploadmateri.idtgl.value;
    var isidurasi = document.formuploadmateri.iddurasi.value;
    var isiakses = document.formuploadmateri.idaksessiswa.value;
    if (isimapel == "" || isitanggal == "" || isidurasi == "") { // Beri kondisi jika isian tidak lengkap maka ditolak
        alert("Isian tidak lengkap, Mohon lengkapi isian data di atas");

        document.getElementById("uploadmateri").value = "";
    } else {
        var item = "";
        document.getElementById("kirimmaterikeserver").removeAttribute("onclick");
        document.getElementById("kirimmaterikeserver").setAttribute("onclick", "persiapanuploadkonten()");
        document.getElementById("kirimmaterikeserver").innerHTML = "Publikasikan";
        document.getElementById("kirimmaterikeserver").style.display = "block";
        document.getElementById("resultlink").innerHTML = "";
        document.getElementById("hasiltoken").innerHTML = document.formuploadmateri.idmapel.value;
        document.getElementById("divceklis").style.display = "block";
        document.getElementById("divsayasetuju").style.display = "block";
        document.getElementById("sayasetuju").checked = false;
        sayasetuju();

        item = document.getElementById("uploadmateri").files[0];

        var fr = new FileReader();
        fr.onload = function () {

            var tes = brkline(fr.result);
            //document.getElementById("output").textContent = tes ;//fr.result;
            document.getElementById("output").innerHTML = ""; //fr.result;
            document.getElementById("output").innerHTML = tes; //fr.result;

            document.getElementById("materiimport").innerHTML = ""; //kosongkan dulu;

            //document.getElementById("materiimport").innerHTML+="<div style='border:1px solid red;padding:5px;border-radius:5px;overflow-x:auto'>" ;
            var tabelpreview = document.createElement("table");
            tabelpreview.setAttribute("class", "versi-table");
            var tr = tabelpreview.insertRow(-1);
            var cel1 = tr.insertCell(-1);
            cel1.innerHTML = "Sekolah";
            var cel1 = tr.insertCell(-1);
            cel1.setAttribute("id", "prevhp_sekolah");
            cel1.innerHTML = namasekolahku;
            var tr = tabelpreview.insertRow(-1);
            var cel1 = tr.insertCell(-1);
            cel1.innerHTML = "Nama Siswa";
            var cel1 = tr.insertCell(-1);
            cel1.setAttribute("id", "prevhp_Nama_Siswa");
            cel1.innerHTML = "[Nama Siswa login]";
            var tr = tabelpreview.insertRow(-1);
            var cel1 = tr.insertCell(-1);
            cel1.innerHTML = "Kelas";
            var cel1 = tr.insertCell(-1);
            cel1.setAttribute("id", "prevhp_Kelas_Siswa");
            cel1.innerHTML = "[Kelas Siswa Login]";
            var tr = tabelpreview.insertRow(-1);
            var cel1 = tr.insertCell(-1);
            cel1.innerHTML = "Mata Pelajaran/Tema";
            var cel1 = tr.insertCell(-1);
            cel1.setAttribute("id", "previewhp_mapeltoken_Siswa");
            cel1.innerHTML = "[Mapel/Tema]";
            var tr = tabelpreview.insertRow(-1);
            var cel1 = tr.insertCell(-1);
            cel1.innerHTML = "Tanggal Bisa Akses";
            var cel1 = tr.insertCell(-1);
            cel1.setAttribute("id", "previewhp_tgltoken_Siswa");
            cel1.innerHTML = "[tgal] akses";
            var tr = tabelpreview.insertRow(-1);
            var cel1 = tr.insertCell(-1);
            cel1.innerHTML = "Durasi Waktu";
            var cel1 = tr.insertCell(-1);
            cel1.setAttribute("id", "previewhp_durasitoken_Siswa");
            cel1.innerHTML = "[durasi] akses";
            var tr = tabelpreview.insertRow(-1);
            var cel1 = tr.insertCell(-1);
            cel1.setAttribute("id", "timer");
            cel1.innerHTML = "Timer: ";
            var cdtimer = document.createElement("input")
            cdtimer.setAttribute("id", "cd_seconds");
            cdtimer.setAttribute("disabled", "true");
            cdtimer.setAttribute("value", "120");
            cdtimer.setAttribute("style", "width:50px")
            cel1.appendChild(cdtimer);
            cel1.innerHTML += " Menit."
            var cel1 = tr.insertCell(-1);
            cel1.setAttribute("id", "tempatdurasi");
            var cdstatus = document.createElement("b");
            cdstatus.setAttribute("id", "cd_status");
            var tekscdstatus = document.createTextNode("Durasi Penyelesaian:");
            cdstatus.appendChild(tekscdstatus);
            var cdjam = document.createElement("span");
            cdjam.setAttribute("id", "cd_h");
            var tekscdjam = document.createTextNode("00:");
            cdjam.appendChild(tekscdjam);
            var cdmenit = document.createElement("span");
            cdmenit.setAttribute("id", "cd_m");
            var tekscdmenit = document.createTextNode("00:");
            cdmenit.appendChild(tekscdmenit);
            var cddetik = document.createElement("span");
            cddetik.setAttribute("id", "cd_s");
            var tekscddetik = document.createTextNode("00");
            cddetik.appendChild(tekscddetik);
            var cdpause = document.createElement("input")
            cdpause.setAttribute("type", "button");
            cdpause.setAttribute("id", "cd_pause");
            cdpause.setAttribute("value", "Jeda");
            var cdpstop = document.createElement("input")
            cdpstop.setAttribute("type", "button");
            cdpstop.setAttribute("id", "cd_stop");
            cdpstop.setAttribute("value", "Selesai");
            var gntibaris = document.createElement("br");
            var controltimer = document.createElement("b")
            var tekscontroltimer = document.createTextNode("Control Timer:");
            controltimer.appendChild(tekscontroltimer);
            var controlstart = document.createElement("input");
            controlstart.setAttribute("type", "button");
            controlstart.setAttribute("id", "cd_start");
            controlstart.setAttribute("value", "Mulai Mengerjakan");
            var controlreset = document.createElement("input");
            controlreset.setAttribute("type", "button");
            controlreset.setAttribute("id", "cd_reset");
            controlreset.setAttribute("value", "Reset Timer");
            var titikdua = document.createElement("b");
            var tekstitikdua = document.createTextNode(":");
            titikdua.appendChild(tekstitikdua);

            cel1.appendChild(controltimer);
            cel1.innerHTML += "<br/>";
            cel1.appendChild(controlstart);
            //cel1.appendChild(controlreset);
            //cel1.appendChild(cdpause);
            cel1.appendChild(cdpstop);
            cel1.appendChild(gntibaris);
            cel1.appendChild(cdstatus);
            cel1.innerHTML += ":<br/>";
            cel1.appendChild(cdjam);
            cel1.innerHTML += ":";
            cel1.appendChild(cdmenit);
            cel1.appendChild(titikdua)
            cel1.appendChild(cddetik);


            //document.getElementById("materiimport").innerHTML+="</div>";					
            document.getElementById("materiimport").appendChild(tabelpreview);
            document.getElementById("materiimport").innerHTML += tes; //fr.result;

            document.getElementById("namafileupload").innerHTML = item.name + " (" + (item.size / 1000).toFixed(2) + " Kb)";
            $("#previewlogohp").hide();
            $("#previewloginsiswa").hide();
            $("#materiimport").hide();
            $("#layardepan").show();
            //console.log(tes)

        }
        fr.readAsText(item);
        // ini untuk menguload ke Drive
        var oFReader = new FileReader();
        oFReader.readAsDataURL(item);

        oFReader.onload = function (oFREvent) {
            document.getElementById("basetxt").value = oFREvent.target.result;

        };
    }
}

function lentanggal(id) {
    //var teks = id;
    var tglsplit, blnsplit, thnsplit;
    if (id != 0) {
        if (id.length == 7) {
            tglsplit = addZero(id.slice(0, 1));
            blnsplit = id.slice(1, 3);
            thnsplit = id.slice(3, 7);
        } else {
            tglsplit = id.slice(0, 2);
            blnsplit = id.slice(2, 4);
            thnsplit = id.slice(4, 8);
        }
    }
    id = tglsplit + "/" + blnsplit + "/" + thnsplit;
    return id
}

function uploadpotoessay(id) {
    var item = document.getElementById("iduploadpotoessay" + id).files[0];
    var tempat = document.getElementById("filejawaban" + id);
    tempat.innerHTML = ""
    var ofReader = new FileReader();
    ofReader.readAsDataURL(item);
    var resize_width = "150"
    ofReader.onload = function (e) {
        // --- convert image ====
        ofReader.size = item.size; //get the image's size


        var src = e.target.result;
        document.getElementById("filejawaban" + id).innerHTML = src;
        var base64 = e.target.result.replace(/^.*,/, '');
        var typeasal = e.target.result.match(/^.*(?=;)/)[0];
        var typenyaaja = typeasal.replace("data:", "");
        if (typenyaaja.indexOf("image") > -1) {
            tempat.innerHTML = "<img id='image" + id + "' src='" + src + "' style='width:500px; border:1px solid blue; padding:5px; border-radius:10px'/><br/>tipe gambar: " + typenyaaja.split("/")[1];
        } else if (typenyaaja.indexOf("video") > -1) {
            tempat.innerHTML = "<video id='myvideo" + id + "' width='350' height='200'  poster='https://1.bp.blogspot.com/-q57d59JTX8g/Xa-kAy6T0XI/AAAAAAAAOSo/seM01RU3Q_Q7BvLm73wC09BBsQMs05pYACLcBGAsYHQ/s320/LOGO%2BLAMASO.png' controls><source src='" + src + "' type='" + typenyaaja + "' />Browser Anda tidak mendukung/format video tidak mendukung</video>";
        } else if (typenyaaja.indexOf("audio") > -1) {
            tempat.innerHTML = "<video id='myaudio" + id + "' width='350' height='200'  poster='https://1.bp.blogspot.com/-q57d59JTX8g/Xa-kAy6T0XI/AAAAAAAAOSo/seM01RU3Q_Q7BvLm73wC09BBsQMs05pYACLcBGAsYHQ/s320/LOGO%2BLAMASO.png' controls><source src='" + src + "' type='" + typenyaaja + "' />Browser Anda tidak mendukung/format video/audio tidak mendukung</video>";
        } else if (typenyaaja.indexOf("wordprocessingml") > -1) {
            tempat.innerHTML = "<i id='taktersedia_" + id + "' class='fa fa-file-word-o w3-xxxlarge' style='font-size:72px'></i><br/> Pratinjau tidak terrsedia ";
            //var idac = id +" "+ src;
            //panci(idac);

        } else if (typenyaaja.indexOf("text") > -1) {
            tempat.innerHTML = "<iframe id='myiframe" + id + "' src='" + src + "' type='" + typenyaaja + "' width='98%' height='400'></iframe><br/>tipe file: " + typenyaaja.split("/")[1];
        } else if (typenyaaja.indexOf("pdf") > -1) {
            tempat.innerHTML = "<iframe id='pdfke" + id + "' src='" + src + "' type='" + typenyaaja + "' width='98%' height='400'></iframe><br/>tipe file: " + typenyaaja.split("/")[1];
        } else {
            tempat.innerHTML = "<i id='takdikenal_" + id + "'  class='fa fa-file-o w3-xxxlarge' style='font-size:72px'></i><br/> File Tidak dikenal <br/>tipe file: " + typenyaaja.split("/")[1];;
        }
    }

}

function uploadpototugas(id) {
    var item = document.getElementById("iduploadpototugas" + id).files[0];
    var tempat = document.getElementById("mediapreview" + id);
    tempat.innerHTML = ""
    var ofReader = new FileReader();
    ofReader.readAsDataURL(item);
    var resize_width = "150"
    ofReader.onload = function (e) {
        // --- convert image ====
        ofReader.size = item.size; //get the image's size


        var src = e.target.result;
        document.getElementById("filejawaban" + id).innerHTML = src;
        var base64 = e.target.result.replace(/^.*,/, '');
        var typeasal = e.target.result.match(/^.*(?=;)/)[0];
        var typenyaaja = typeasal.replace("data:", "");
        if (typenyaaja.indexOf("image") > -1) {
            tempat.innerHTML = "<img src='" + src + "' style='width:98%; border:1px solid blue; padding:5px; border-radius:10px'/><br/>tipe gambar: " + typenyaaja.split("/")[1];
        } else if (typenyaaja.indexOf("video") > -1) {
            tempat.innerHTML = "<video id='myvideo' width='350' height='200'  poster='https://1.bp.blogspot.com/-q57d59JTX8g/Xa-kAy6T0XI/AAAAAAAAOSo/seM01RU3Q_Q7BvLm73wC09BBsQMs05pYACLcBGAsYHQ/s320/LOGO%2BLAMASO.png' controls><source src='" + src + "' type='" + typenyaaja + "' />Browser Anda tidak mendukung/format video tidak mendukung</video>";
        } else if (typenyaaja.indexOf("audio") > -1) {
            tempat.innerHTML = "<video id='myvideo' width='350' height='200'  poster='https://1.bp.blogspot.com/-q57d59JTX8g/Xa-kAy6T0XI/AAAAAAAAOSo/seM01RU3Q_Q7BvLm73wC09BBsQMs05pYACLcBGAsYHQ/s320/LOGO%2BLAMASO.png' controls><source src='" + src + "' type='" + typenyaaja + "' />Browser Anda tidak mendukung/format video tidak mendukung</video>";
        } else if (typenyaaja.indexOf("wordprocessingml") > -1) {
            tempat.innerHTML = "<i class='fa fa-file-word-o w3-xxxlarge' style='font-size:72px'></i><br/> Pratinjau tidak terrsedia ";
            //var idac = id +" "+ src;
            //panci(idac);

        } else if (typenyaaja.indexOf("text") > -1) {
            tempat.innerHTML = "<iframe src='" + src + "' type='" + typenyaaja + "' width='98%' height='400'></iframe>";
        } else if (typenyaaja.indexOf("pdf") > -1) {
            tempat.innerHTML = "<iframe src='" + src + "' type='" + typenyaaja + "' width='98%' height='400'></iframe>";
        } else {
            tempat.innerHTML = "<i class='fa fa-file-o w3-xxxlarge' style='font-size:72px'></i><br/> File Tidak dikenal ";;
        }
    }

}

function tombolketikjawaban(id) {
    //alert("Tombol ketik Jawbaan No " + id)
    var tempatnya = document.getElementById("tomboljawaban" + id)
    tempatnya.innerHTML = "";
    var teksarea = document.createElement("textarea");
    teksarea.setAttribute("class", "filejawaban");
    teksarea.setAttribute("id", "filejawaban" + id);
    teksarea.setAttribute("cols", "30");
    teksarea.setAttribute("rows", "10");
    teksarea.setAttribute("placeholder", "Silakan ketik jawaban essay untuk No. Soal " + id);
    tempatnya.appendChild(teksarea);
    tempatnya.innerHTML += "<br/>Ganti dengan mengupload media:";
    var tombollain = document.createElement("button")
    tombollain.setAttribute("onclick", "tomboluploadjawaban('" + id + "')");
    tombollain.innerHTML = "Upload Jawaban No " + id
    tempatnya.appendChild(tombollain);
    tempatnya.innerHTML += "<sub> dengan memilih cara lain, jawaban yang sudah diketik akan hilang dan diganti dengan jawaban berupa gambar/media yang diunggah</sub>"


}

function tomboluploadjawaban(id) {
    //alert("Tombol Upload Jawbaan No " + id)
    var tempatnya = document.getElementById("tomboljawaban" + id);
    var katajadi = "";
    tempatnya.innerHTML = "";
    //	var divbackground = document.createElement("div");
    //		divbackground.setAttribute("style","background-color:#ffcdc9;padding:10px");
    //		divbackground.innerHTML = "Upload Media(Poto, audio, video, pdf, word/txt, dll) jawaban essay No " + id + " dengan menguploadnya di sini: <br/><br/>";
    //			var labelupload = document.createElement("label");
    //				labelupload.setAttribute("style", "border:1px solid black;background-color:#eee;padding:5px;border-radius:5px");
    //				labelupload.setAttribute("for",

    katajadi += "<div style='background-color:#ffcdc9;padding:10px'>Upload Media(Poto, audio, video, pdf, word/txt, dll) jawaban essay No";
    katajadi += " " + id + " dengan menguploadnya di sini: <br/><br/>";
    katajadi += "<label style='border:1px solid black;background-color:#eee;padding:5px;border-radius:5px' for='iduploadpotoessay" + id + "' id='label" + id + "'><i class='fa fa-camera'></i> Upload Jawaban</label><br/><br/>";
    katajadi += "<div id='filejawaban" + id + "' class='filejawaban' style='overflow-x:auto'>";
    katajadi += "<img src='https://1.bp.blogspot.com/-q57d59JTX8g/Xa-kAy6T0XI/AAAAAAAAOSo/seM01RU3Q_Q7BvLm73wC09BBsQMs05pYACLcBGAsYHQ/s320/LOGO%2BLAMASO.png'  style='width:145px;margin:auto;border:1px solid blue'/>";
    katajadi += "</div>";

    katajadi += "<input type='file' id='iduploadpotoessay" + id + "' onchange='uploadpotoessay(" + id + ")' style='display:none'/>"; //<div  id='filejawaban"+indexpotojawaban+"' class='jawabanfile' style='display:none' ></div>"
    katajadi += "</div>";
    //-----------------------------
    katajadi += "<br/>Ganti dengan mengetik jawaban:";
    katajadi += "<button onclick='tombolketikjawaban(" + id + ")'>Ketik Jawaban No. " + id + "</button>";
    katajadi += "<sub> dengan memilih cara lain, jawaban yang sudah  diupload akan hilang dan diganti dengan jawaban berupa ketikan/tulisan</sub>"
    //-----------------------------
    tempatnya.innerHTML = katajadi;
}

function brkline(teks) { //coba
    var tek = teks.split("\r\n"); //cari sKetiap ganti baris;
    var inn = "";
    var indexpotojawaban = 0;
    var kodeganti = ["_JUDUL_", "_PECAHAN BIASA_"];

    var keypg = document.getElementById("keypg");
    if (keypg == null) {
        var scrippg = document.createElement("script");
        scrippg.setAttribute("id", "keypg");
        scrippg.innerHTML = "var keybase=''";
        tttkeybase.innerHTML = "";

        document.body.appendChild(scrippg);

    } else {
        keypg.innerHTML = "var keybase=''";
        tttkeybase.innerHTML = "";
    }

    for (x = 0; x < tek.length; x++) {
        var asal = tek[x]; // dalam satu baris ini, misal baris pertama:
        var cJudul = jumlahdobel(asal, "_JUDUL_");
        var cGambar = jumlahdobel(asal, "_GAMBAR_");
        var cPecBiasa = jumlahdobel(asal, "_PECAHAN-BIASA_");
        var cPecCamp = jumlahdobel(asal, "_PECAHAN-CAMPURAN_");


        //inn += "ke-"+ x +" = " + asal + "<hr style='border-bottom:1px solid red'/>";
        //inn += "ke-"+ x + " = JUDUL = " + cJudul +", GAMBAR = " + cGambar +", Pecahan Biasa = " + cPecBiasa +", Pecahan Campuran = " + cPecCamp + "<hr style='border-bottom:1px solid blue'/>";
        var katajadi = "";

        if (asal.indexOf("_JUDUL_") > -1) {
            var hJudul;
            var arjud = asal.split("_JUDUL_");
            var katakonversi;
            for (jd in arjud) {
                if (jd > 0) {
                    katakonversi = katajadireplace(arjud[jd]);
                    //hJudul = "<h4 style='background-color:darkslategrey;color:white;padding:1px'>" + arjud[jd]+ "</h4>";
                    hJudul = "<h4 style='background-color:darkslategrey;color:white;padding:1px'>" + katakonversi + "</h4>";
                    //katajadi += hJudul ;
                    katajadi += hJudul + "<br/>";
                }
            }
        } else if (asal.indexOf("_ESSAY-NO_") > -1) {
            var esayno = asal.split("_ESSAY-NO_")[0];
            var tekspisah = asal.replace("_ESSAY-NO_", "").split(" ");
            katajadi += "<ol style='list-style-type:decimal' start='" + tekspisah[0] + "'><li id='essay" + tekspisah[0] + "' class='soalessay' style='border-bottom:1px solid blue'><div id='pertanyaanessay_" + tekspisah[0] + "'>";
            for (es in tekspisah) {
                if (es > 0) {
                    katajadi += katajadireplace(tekspisah[es]);
                }
            }


            katajadi += "</div><div id='tomboljawaban" + tekspisah[0] + "'><hr/></div>"
            katajadi += "<br/></li></ol>"
        } else if (asal.indexOf("_START-TABEL_") > -1) {
            katajadi += asal.replace("_START-TABEL_", "<div style='overflow-x:auto'><table class='versi-table'>");
            //katajadi += asal.replace("_START-TABEL_","<table class='versi-table'>");
        } else if (asal.indexOf("_START-TABEL-OPSI_") > -1) {
            katajadi += asal.replace("_START-TABEL-OPSI_", "<hr style='border-top:1px solid olive'/><div style='overflow-x:auto'><table class='versi-table'>");
            //katajadi += asal.replace("_START-TABEL_","<table class='versi-table'>");
        } else if (asal.indexOf("<|HEADER|>") > -1) {
            katajadi += "<tr>";
            var tekarray = asal.split("<|HEADER|>");
            var katakonversi;
            for (th in tekarray) {
                katakonversi = katajadireplace(tekarray[th]);
                //katajadi +="<th>" + tekarray[th] +"</th>";
                katajadi += "<th>" + katakonversi + "</th>";
            }
            katajadi += "</tr>"
        } else if (asal.indexOf("<|>") > -1) {
            katajadi += "<tr>";
            var tekarray = asal.split("<|>");
            var katakonversi;
            for (td in tekarray) {
                katakonversi = katajadireplace(tekarray[td]);
                katajadi += "<td>" + katakonversi + "</td>"
            }
            katajadi += "</tr>"
            //inn +=  "<table class='versi-table'>";
        } else if (asal.indexOf("_SELESAI-TABEL_") > -1) {
            katajadi += "</table></div><br/>";
            //katajadi +=  "</table><br/>";

        } else if (asal.indexOf("_SELESAI-TABEL-OPSI_") > -1) {
            //katajadi +=  "</table></div><br/>";
            katajadi += "</table><br/></li></ol>";

        } else if (asal.indexOf("_PG_") > -1) {
            var Q_PG = "";
            var teks = asal.replace("_PG_", ""); // return = 1 teks pertanyaaan bla bla bla
            var arrTeks = teks.split(" ");
            nosoal = arrTeks[0];
            Q_PG += "<ol style='list-style-type:decimal;margin:5px 5px 0px 30px;padding:0' start='" + nosoal + "'><li id='soalke-" + nosoal + "' class='calcnosoal' style='border-top:1px double blue'>";
            var katakonversi;
            for (ss in arrTeks) {
                if (ss > 0) {
                    katakonversi = katajadireplace(arrTeks[ss]);
                    Q_PG += katakonversi;
                }
            }
            //katajadi = Q_PG + "<hr style='border-top:1px solid olive'/>";
            katajadi = Q_PG

        } else if (asal.indexOf("_OPSI-PG_") > -1) {
            var opsipg = "";
            var arpgg = asal.replace("_OPSI-PG_", ""); // hasilnya: 1A teks pertanyaan bla bla bla
            var arpg = arpgg.split(" "); //hasilnya: 0=1A 1=teks 2=pertanyaan ... dst.
            var idopsi = arpg[0]; // hasilnya: 1A
            var abjad = idopsi.slice(1, 2); // hasilnya A
            var nosoal = idopsi.slice(0, 1); // hasilnya 1
            if (abjad === "A") {
                opsipg += "<hr style='border-top:1px solid olive'/>";
                opsipg += "<ol style='list-style-type:upper-alpha;margin:5px 5px 0px 20px;padding:0' ><li><input class='calc' type='radio' style='display:none' name='soal" + nosoal + "' id='" + idopsi + "'/><label class='opsi' for='" + idopsi + "'>"; // Khusus opsi A, ada elemen OL lalu dilanjut teksnya
            } else {
                opsipg += "<li><input class='calc' type='radio' style='display:none' name='soal" + nosoal + "' id='" + idopsi + "'/><label class='opsi' for='" + idopsi + "'>"; // selain opsi A, dilanjut.  Tapi tanpa element OL
            }
            var katakonversi;
            for (tt in arpg) { //hasilnya: 0=1A 1=teks 2=pertanyaan ... dst.
                if (tt > 0) { // hindari array 0=1A
                    katakonversi = katajadireplace(arpg[tt]);
                    //hJudul = "<h4 style='background-color:darkslategrey;color:white;padding:1px'>" + arjud[jd]+ "</h4>";
                    opsipg += katakonversi
                }
            }
            if (abjad === "D") {
                opsipg += "</label></li></ol></li></ol>";
            } else {
                opsipg += "</label></li>";
            }


            katajadi += opsipg;

        } else if (asal.indexOf("_POTO-JAWABAN-TUGAS_") > -1) {
            var tekssplit = asal.replace("_POTO-JAWABAN-TUGAS_", "").split(" ")[0]; // return: 1/2/3
            var mediaessay = "";
            var bnyk = tekssplit.split("/");
            for (de in bnyk) {
                mediaessay += bnyk[de] + ", ";
            }
            katajadi += "<div style='background-color:#ffcdc9;padding:10px'>Upload Media(Poto, audio, video, pdf, word/txt, dll) jawaban Tugas No";
            katajadi += " " + mediaessay + " dengan menguploadnya di sini: <br/><br/>";
            katajadi += "<label style='border:1px solid black;background-color:#eee;padding:5px;border-radius:5px' for='iduploadpototugas" + indexpotojawaban + "' id='label" + indexpotojawaban + "'><i class='fa fa-camera'></i> Upload Jawaban</label><br/><br/>";
            katajadi += "<div class='potoessay' id='" + tekssplit + "' style='overflow-x:auto'><div id='mediapreview" + indexpotojawaban + "'>";
            katajadi += "<img src='https://1.bp.blogspot.com/-q57d59JTX8g/Xa-kAy6T0XI/AAAAAAAAOSo/seM01RU3Q_Q7BvLm73wC09BBsQMs05pYACLcBGAsYHQ/s320/LOGO%2BLAMASO.png'  style='width:145px;margin:auto;border:1px solid blue'/>";
            katajadi += "</div></div>";

            katajadi += "<input type='file' id='iduploadpototugas" + indexpotojawaban + "' onchange='uploadpototugas(" + indexpotojawaban + ")' style='display:none'/><div  id='filejawaban" + indexpotojawaban + "' class='jawabanfile' style='display:none' ></div>"


            katajadi += "</div>";

            indexpotojawaban += 1;


        } else if (asal.indexOf("_KUNCI-PG_") > -1) {
            //REPLACE DULU = misal: _KUNCI-PG_1A, 2B, 3C<kalo adaspasi>
            var tekskunci = asal.replace("_KUNCI-PG_", "").replace(/\s+/g, "").split(","); // hasilnya: 1A,2B,3C
            var arrkunci = [];
            for (o = 0; o < tekskunci.length; o++) {
                arrkunci.push(tekskunci[o])
            }
            basekunci = window.btoa(arrkunci);
            //basekunci = arrkunci;//window.btoa(arrkunci);
            var keypg = document.getElementById("keypg");

            //var teksscript = document.createTextNode("var keybase='"+basekunci+"'");
            //	keypg.appendChild(teksscript);
            keypg.innerHTML = "var keybase='" + basekunci + "'";
            tttkeybase.innerHTML = basekunci;
        } else {
            var katakonversi = katajadireplace(asal);
            katajadi += katakonversi + "<br/>";

        }
        inn += katajadi; //+ "&lt;br/&gt;" ;
    }


    return inn
}

function brklinol(teks) { //coba
    var tek = teks.split("\r\n"); //cari sKetiap ganti baris;
    var inn = "";
    var kodeganti = ["_JUDUL_", "_PECAHAN BIASA_"];
    for (x = 0; x < tek.length; x++) {
        var asal = tek[x]; // dalam satu baris ini, misal baris pertama:
        var cJudul = jumlahdobel(asal, "_JUDUL_");
        var cGambar = jumlahdobel(asal, "_GAMBAR_");
        var cPecBiasa = jumlahdobel(asal, "_PECAHAN-BIASA_");
        var cPecCamp = jumlahdobel(asal, "_PECAHAN-CAMPURAN_");


        //inn += "ke-"+ x +" = " + asal + "<hr style='border-bottom:1px solid red'/>";
        //inn += "ke-"+ x + " = JUDUL = " + cJudul +", GAMBAR = " + cGambar +", Pecahan Biasa = " + cPecBiasa +", Pecahan Campuran = " + cPecCamp + "<hr style='border-bottom:1px solid blue'/>";
        var katajadi = "";

        if (asal.indexOf("_JUDUL_") > -1) {
            var hJudul;
            var arjud = asal.split("_JUDUL_");
            var katakonversi;
            for (jd in arjud) {
                if (jd > 0) {
                    katakonversi = katajadireplace(arjud[jd]);
                    //hJudul = "<h4 style='background-color:darkslategrey;color:white;padding:1px'>" + arjud[jd]+ "</h4>";
                    hJudul = "<h4 style='background-color:darkslategrey;color:white;padding:1px'>" + katakonversi + "</h4>";
                    //katajadi += hJudul ;
                    katajadi += hJudul + "<br/>";
                }
            }
        } else if (asal.indexOf("_START-TABEL_") > -1) {
            katajadi += asal.replace("_START-TABEL_", "<div style='overflow-x:auto'><table class='versi-table'>");
            //katajadi += asal.replace("_START-TABEL_","<table class='versi-table'>");
        } else if (asal.indexOf("_START-TABEL-OPSI_") > -1) {
            katajadi += asal.replace("_START-TABEL-OPSI_", "<hr style='border-top:1px solid olive'/><div style='overflow-x:auto'><table class='versi-table'>");
            //katajadi += asal.replace("_START-TABEL_","<table class='versi-table'>");
        } else if (asal.indexOf("<|HEADER|>") > -1) {
            katajadi += "<tr>";
            var tekarray = asal.split("<|HEADER|>");
            var katakonversi;
            for (th in tekarray) {
                katakonversi = katajadireplace(tekarray[th]);
                //katajadi +="<th>" + tekarray[th] +"</th>";
                katajadi += "<th>" + katakonversi + "</th>";
            }
            katajadi += "</tr>"
        } else if (asal.indexOf("<|>") > -1) {
            katajadi += "<tr>";
            var tekarray = asal.split("<|>");
            var katakonversi;
            for (td in tekarray) {
                katakonversi = katajadireplace(tekarray[td]);
                katajadi += "<td>" + katakonversi + "</td>"
            }
            katajadi += "</tr>"
            //inn +=  "<table class='versi-table'>";
        } else if (asal.indexOf("_SELESAI-TABEL_") > -1) {
            katajadi += "</table></div><br/>";
            //katajadi +=  "</table><br/>";

        } else if (asal.indexOf("_SELESAI-TABEL-OPSI_") > -1) {
            //katajadi +=  "</table></div><br/>";
            katajadi += "</table><br/></li></ol>";

        } else if (asal.indexOf("_PG_") > -1) {
            var Q_PG = "";
            var teks = asal.replace("_PG_", ""); // return = 1 teks pertanyaaan bla bla bla
            var arrTeks = teks.split(" ");
            nosoal = arrTeks[0];
            Q_PG += "<ol style='list-style-type:decimal;margin:5px 5px 0px 30px;padding:0' start='" + nosoal + "'><li style='border-top:1px double blue'>";
            var katakonversi;
            for (ss in arrTeks) {
                if (ss > 0) {
                    katakonversi = katajadireplace(arrTeks[ss]);
                    Q_PG += katakonversi;
                }
            }
            //katajadi = Q_PG + "<hr style='border-top:1px solid olive'/>";
            katajadi = Q_PG

        } else if (asal.indexOf("_OPSI-PG_") > -1) {
            var opsipg = "";
            var arpgg = asal.replace("_OPSI-PG_", ""); // hasilnya: 1A teks pertanyaan bla bla bla
            var arpg = arpgg.split(" "); //hasilnya: 0=1A 1=teks 2=pertanyaan ... dst.
            var idopsi = arpg[0]; // hasilnya: 1A
            var abjad = idopsi.slice(1, 2); // hasilnya A
            var nosoal = idopsi.slice(0, 1); // hasilnya 1
            if (abjad === "A") {
                opsipg += "<hr style='border-top:1px solid olive'/>";
                opsipg += "<ol style='list-style-type:upper-alpha;margin:5px 5px 0px 20px;padding:0' ><li><input class='calc' type='radio' style='display:none' name='soal" + nosoal + "' id='" + idopsi + "'/><label class='opsi' for='" + idopsi + "'>"; // Khusus opsi A, ada elemen OL lalu dilanjut teksnya
            } else {
                opsipg += "<li><input class='calc' type='radio' style='display:none' name='soal" + nosoal + "' id='" + idopsi + "'/><label class='opsi' for='" + idopsi + "'>"; // selain opsi A, dilanjut.  Tapi tanpa element OL
            }
            var katakonversi;
            for (tt in arpg) { //hasilnya: 0=1A 1=teks 2=pertanyaan ... dst.
                if (tt > 0) { // hindari array 0=1A
                    katakonversi = katajadireplace(arpg[tt]);
                    //hJudul = "<h4 style='background-color:darkslategrey;color:white;padding:1px'>" + arjud[jd]+ "</h4>";
                    opsipg += katakonversi
                }
            }
            if (abjad === "D") {
                opsipg += "</label></li></ol></li></ol>";
            } else {
                opsipg += "</label></li>";
            }


            katajadi += opsipg;

        } else {
            var katakonversi = katajadireplace(asal);
            katajadi += katakonversi + "<br/>";

        }
        inn += katajadi; //+ "&lt;br/&gt;" ;
    }


    return inn
}

function katajadireplace(asal) {
    var splitTeks = asal.split(" ");
    var ccJudul = 1;
    var brsTabel = 0;
    var katajadi = "";
    for (i = 0; i < splitTeks.length; i++) {
        //jika judul:
        if (splitTeks[i].indexOf("_GAMBAR_") > -1) {
            katajadi += "<img src='" + splitTeks[i].replace("_GAMBAR_", "") + "' style='width:50%;border:1px solid red;border-radius:5px' alt='tidak muncul, link Anda salah atau ada spasi setelah kode'/>";
        } else if (splitTeks[i].indexOf("_GAMBAR-DRIVE_") > -1) {
            var hilangkankode = splitTeks[i].replace("_GAMBAR-DRIVE_", "");
            var hilangkanprefik = hilangkankode.replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=view&id=");
            var hilangkansufik = hilangkanprefik.replace("/view", "");
            var hilangkansufike = hilangkansufik.replace("?usp=drivesdk", "");

            katajadi += "<img src='" + hilangkansufike + "' style='width:50%;border:1px solid red;border-radius:5px' alt='tidak muncul, link Anda salah atau ada spasi setelah kode, contoh link:https://drive.google.com/file/d/1J0NUwTrxFBZ0JZBCzVTlsDFeXbn3mIci/view'/> ";
        } else if (splitTeks[i].indexOf("_PECAHAN-BIASA_") > -1) {
            var a = splitTeks[i].replace("_PECAHAN-BIASA_", "").split("/")[0];
            var b = splitTeks[i].replace("_PECAHAN-BIASA_", "").split("/")[1];
            katajadi += "<img src='https://chart.apis.google.com/chart?cht=tx&chl=%5Cfrac%7B" + a + "%7D%7B" + b + "%7D%20&chf=bg%2Cs%2CFFFFFF100&chco=000000' />"


        } else if (splitTeks[i].indexOf("_PECAHAN-CAMPURAN_") > -1) {
            var a = splitTeks[i].replace("_PECAHAN-CAMPURAN_", "").split("/")[0];
            var b = splitTeks[i].replace("_PECAHAN-CAMPURAN_", "").split("/")[1];
            var c = splitTeks[i].replace("_PECAHAN-CAMPURAN_", "").split("/")[2];
            katajadi += "<img src='https://chart.apis.google.com/chart?cht=tx&chl=" + a + "%5Cfrac%7B" + b + "%7D%7B" + c + "%7D%20&chf=bg%2Cs%2CFFFFFF80&chco=000000' />"


        } else if (splitTeks[i].indexOf("_AKAR-KUADRAT_") > -1) {
            var a = splitTeks[i].replace("_AKAR-KUADRAT_", "");

            katajadi += "<img src='https://chart.apis.google.com/chart?cht=tx&chl=%5Csqrt%7B%20" + a + "%20%7D%20&chf=bg%2Cs%2CFFFFFF80&chco=000000' />"


        } else if (splitTeks[i].indexOf("_AKAR-TIGA_") > -1) {
            var a = splitTeks[i].replace("_AKAR-TIGA_", "");
            katajadi += " <img src='https://chart.apis.google.com/chart?cht=tx&chl=%5Csqrt%5B3%5D%7B%20" + a + "%20%7D%20&chf=bg%2Cs%2CFFFFFF80&chco=000000' /> "


        } else if (splitTeks[i].indexOf("_PANGKAT_") > -1) {
            var a = splitTeks[i].replace("_PANGKAT_", "").split("/")[0];
            var b = splitTeks[i].replace("_PANGKAT_", "").split("/")[1];
            katajadi += " <img src='https://chart.apis.google.com/chart?cht=tx&chl=%5C" + a + "^" + b + "%20&chf=bg%2Cs%2CFFFFFF80&chco=000000' /> "


        } else if (splitTeks[i].indexOf("_EQUATION-LAINNYA_") > -1) {
            var a = splitTeks[i].replace("_EQUATION-LAINNYA_", "");
            var b = decodeURIComponent(a);
            //var c = decodeURIComponent(b);
            katajadi += " <img src='https://chart.apis.google.com/chart?cht=tx&chl=" + b + "%20&chf=bg%2Cs%2CFFFFFF80&chco=000000' /> "


        } else if (splitTeks[i].indexOf("_YOUTUBE_") > -1) {
            var linkyoutube, konv, konv2, konv3;
            konv = splitTeks[i].replace("_YOUTUBE_", "<br/><iframe width='95%' height='215' src='")
            konv2 = konv.replace("https://youtu.be/", "https://www.youtube.com/embed/"); // kalo link awalnya https://youtu.be/ 
            konv3 = konv2.replace("watch?v=", "embed/"); // jika diambil dari https://www.youtube.com/
            linkyoutube = konv3 + "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><br/>";

            katajadi += linkyoutube;

        } else if (splitTeks[i].indexOf("_OPSI-SEL_") > -1) {
            var splitteks = splitTeks[i].replace("_OPSI-SEL_", "").split(" ");
            var id = splitteks[0]; //4A

            var abjad = id.slice(1, 2); //B
            var nosoal = id.slice(0, 1); //nosoal 4
            var innteks = "<input class='calc' type='radio' style='display:none' name='soal" + nosoal + "' id='" + id + "'/><label class='opsi' for='" + id + "'>" + abjad + "</label>"

            katajadi += innteks;
        } else {
            katajadi += splitTeks[i] + " ";

        }
    }

    return katajadi

}

function fn_map(s) {

    var paragrafsiap = "";
    if (s.indexOf("_JUDUL_") > -1) {
        paragrafsiap += "<h2 style='background-color:black;color:white;padding:1px'>" + s.replace("_JUDUL_", "") + "</h2>"
    } else {
        paragrafsiap += s
    }
    return paragrafsiap
}

function jumlahdobel(arrTeks, txt) {
    var count = 0;
    var crtArr = arrTeks.split(" ");
    for (i in crtArr) {
        if (crtArr[i].indexOf(txt) > -1) {
            count += 1
        }
    }

    return count
}

function gantiapaaja(teks, cariapa, gantiawal, gantiakhir) {
    var split = teks.split(cariapa);
    var teksganti = "";
    //for (x in split){
    for (x = 1; x < split.length; x++) {
        if (split[x].length > 0) {
            teksganti += gantiawal + split[x] + gantiakhir;
        }; //.split(" ")[0] +"</h3>";

    }
    return teksganti
}

function brklineU(teks) { //tes gagal
    var tek = teks.split("\r\n");
    var inn = "";
    var indektabel = 0
    for (x = 0; x < tek.length; x++) {
        if (tek[x].indexOf("_JUDUL_") > -1) {
            var ada = tek[x];
            //		var gnti = replaceAll(ada,"_JUDUL_","<h2 style='background-color:black;color:white;padding:1px'>")
            //		inn +=  gnti + "</h2>" ;
            var split = tek[x].split("_JUDUL_");
            var ubahsplit = split.map(function (s) {
                if (s.length > 0) {
                    inn += "<h2 style='background-color:black;color:white;padding:1px'>" + s + "</h2>"
                }
            })
            //for(i = 0;i < split.length;i++){
            //	if(split[i].length>0){
            //		inn +="<h2 style='background-color:black;color:white;padding:1px'>"+ split[i] + "</h2>";
            //	}
            ///}
        } else if (tek[x].indexOf("_GAMBAR_") > -1) {
            var ada = tek[x].replace(/\s+/g, '');
            var gnti = ada.replace("_GAMBAR_", "<img src='")
            inn += gnti + "' style='width:80%' /><br/>";
        } else if (tek[x].indexOf("_YOUTUBE_") > -1) {
            var carikata = posisiteks(tek[x], "_YOUTUBE_");
            var ganticarikata = carikata.replace("_YOUTUBE_", "<br/><iframe width='90%' height='315' src='"); //return = https://blablablab
            var gantihtppv1 = ganticarikata.replace("https://youtu.be/", "https://www.youtube.com/embed/"); // kalo link awalnya https://youtu.be/ 

            var gantihtppv2 = gantihtppv1.replace("watch?v=", "embed/"); // jika diambil dari https://www.youtube.com/

            var embedsiap = gantihtppv2 + "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><br/>";

            var gantisemuanya = tek[x].replace(carikata, embedsiap);
            inn += gantisemuanya + "<br/>"
        } else if (tek[x].indexOf("_START TABEL_") > -1) {
            inn += "<table class='versi-table'>";
        } else if (tek[x].indexOf("<|header|>") > -1) {
            inn += "<tr>";
            var tekarray = tek[x].split("<|header|>");
            for (th in tekarray) {
                inn += "<th>" + tekarray[th] + "</th>"
            }
            inn += "</tr>"
        } else if (tek[x].indexOf("<|>") > -1) {
            inn += "<tr>";
            var tekarray = tek[x].split("<|>");
            for (td in tekarray) {
                inn += "<td>" + tekarray[td] + "</td>"
            }
            inn += "</tr>"
            //inn +=  "<table class='versi-table'>";
        } else if (tek[x].indexOf("_SELESAI TABEL_") > -1) {
            inn += "</table><br/>";
            indektabel += 1;
        } else if (tek[x].indexOf("_PECAHAN BIASA_") > -1) {
            inn += "teks asli = " + tek[x] + "<br/>";
            var ada = tek[x].split("_PECAHAN BIASA_");
            var mapada = ada.map(function (p) {
                if (p.length > 0) {
                    var q = p.split(" ");
                    //inn += q[0] +"<br/>";
                    var r = q[0].split("/")
                    inn += "nilai yang dicari = " + q[0] + ", angka pertama = " + r[0] + ", dan angka kedua = " + r[1] + "<br/>";
                }; //inn += "<span id='KodeMatematika'>\[  \frac{" + q[0].split("/")[0] +"}{"+ q[0].split("/")[1]+"}\]</span>";
            })

        } else {
            inn += tek[x] + "<br/>";

        }
    }
    return inn
}

function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
}

function posisiteks(teks, cariapa) { //fungsi untuk mengembalikan teks yang dicari
    var banyak_posisi = teks.length; //
    var letak_asal = teks.indexOf(cariapa);
    var kata_setelah_index = teks.slice(letak_asal, banyak_posisi);
    var indexnol = kata_setelah_index.split(" ");
    var kata_ok = indexnol[0];
    //var batas_spasi = kata_setelah_index.indexOf(" ");
    //var batas_index = banyak_posisi - batas_spasi + letak_asal;
    //var kata_ok = teks.slice(letak_asal,batas_index)
    return kata_ok
}

function sayasetuju() {
    var ceklis = document.getElementById("sayasetuju");
    var tekslis = document.getElementById("tekssetuju");
    var tombolsetuju = document.getElementById("kirimmaterikeserver");
    if (ceklis.checked == true) {
        tekslis.innerHTML = "Yakin";
        tombolsetuju.style.display = "block"
    } else {
        tekslis.innerHTML = "Tidak Yakin";
        tombolsetuju.style.display = "none"
    }
}

function kliklamaso() {
    var inputtoken = document.getElementById("previewtoken");
    var inputgurutoken = document.getElementById("idtoken");
    var kontengambar = document.getElementById("previewlogohp");
    var loginsiswa = document.getElementById("previewloginsiswa");
    var kelassiswa = document.getElementById("previewpilihkelas");
    var kelasguru = document.getElementById("kelassayapilih");
    var previewhtml = document.getElementById("materiimport");
    var layardepanhp = document.getElementById("layardepan");
    if (inputtoken.value == inputgurutoken.value && kelassiswa.value == kelasguru.innerHTML) {
        alert("Token yang anda masukkan sudah benar. Selamat Belajar");
        kontengambar.style.display = "block";
        loginsiswa.style.display = "block";
        previewhtml.style.display = "none";
        layardepanhp.style.display = "none";
        document.getElementById("output").innerHTML = "";
        ///------------------------------------////

        ///------------------------------------////





    } else {
        alert("Tampilan Online: Token yang Ananda masukkan tidak terdaftar. Silakan ulangi \r\n \r\n Preview: Untuk preview/uji coba, Kode Token/Sandi kosongkan saja agar dapat melihat tampilan e-Lamaso yang sedang Anda kerjakan");
        inputtoken.value = "";
    }
}

function mulaibelajar() {
    var inputtoken = document.getElementById("previewtoken");
    var inputgurutoken = document.getElementById("idtoken");
    var kontengambar = document.getElementById("previewlogohp");
    var loginsiswa = document.getElementById("previewloginsiswa");
    var kelassiswa = document.getElementById("previewpilihkelas");
    var kelasguru = document.getElementById("kelassayapilih");
    var previewhtml = document.getElementById("materiimport");
    var layardepanhp = document.getElementById("layardepan");

    kontengambar.style.display = "none";
    loginsiswa.style.display = "none";
    previewhtml.style.display = "block";
    layardepanhp.style.display = "none";
    document.getElementById("output").innerHTML = "";
    ///------ isi identitas sampel -------////
    document.getElementById("prevhp_Nama_Siswa").innerHTML = document.getElementById("previewpilihnama").value;
    document.getElementById("prevhp_Kelas_Siswa").innerHTML = document.getElementById("previewpilihkelas").value;
    document.getElementById("previewhp_mapeltoken_Siswa").innerHTML = document.formuploadmateri.idmapel.value;
    document.getElementById("previewhp_tgltoken_Siswa").innerHTML = lentanggal(document.formuploadmateri.crtToken.value);
    document.getElementById("previewhp_durasitoken_Siswa").innerHTML = document.formuploadmateri.iddurasi.value + " menit.";
    document.getElementById("cd_seconds").value = document.formuploadmateri.iddurasi.value;

    ///------------------------------------////






}

function refreshpreview() {
    var inputtoken = document.getElementById("previewtoken");
    var inputgurutoken = document.getElementById("idtoken");
    var kontengambar = document.getElementById("previewlogohp");
    var loginsiswa = document.getElementById("previewloginsiswa");
    var previewhtml = document.getElementById("materiimport");
    var divinput = document.getElementById("output");
    var divprivewhp = document.getElementById("materiimport");
    var divlayardepanhp = document.getElementById("layardepan");
    kontengambar.style.display = "none";
    loginsiswa.style.display = "none";
    previewhtml.style.display = "none";
    divlayardepanhp.style.display = "block";
    inputtoken.value = "";
    //divinput.innerHTML="";
    //divprivewhp.innerHTML="Anda Sudah merefresh laman preview, Upload ulang materi Anda.";
    //document.getElementById("namafileupload").innerHTML ="File di Refresh. Silakan upload ulang";
    //document.getElementById("basetxt").value="";



}

function salahkelas() {
    var selectkelaspreview = document.getElementById("previewpilihkelas");
    var kelasgurunya = document.getElementById("kelassayapilih").innerHTML;
    var selectnamasiswa = document.getElementById("previewpilihnama");
    if (selectkelaspreview.value == kelasgurunya) {
        selectnamasiswa.style.display = "block";
    } else {
        alert("Privew ini, kelas yang dipilih tidak sesuai dengan kelas Anda");
        selectnamasiswa.style.display = "none";

    }
}

function petunjukuploadmateri() {
    document.getElementById('modalpetunjuk').style.display = 'block';
    document.getElementById("judulpetunjuk").innerHTML = "Petunjuk Upload Materi";
    document.getElementById("isipetunjuk").innerHTML = document.getElementById("petunjukuploadmateri").outerHTML;
}

function caramembuatfilemateri() {
    document.getElementById('modalpetunjuk').style.display = 'block';
    document.getElementById("judulpetunjuk").innerHTML = "Cara Membuat Materi Lamaso";
    var teksnama = document.getElementById("petunjukpembuatanmateri").outerHTML;
    var gantii = teksnama.replace(/"contoh/g, "modal");
    //var ganti =	gantii.replace(/opsi/g,"opsik");
    document.getElementById("isipetunjuk").innerHTML = gantii; //document.getElementById("petunjukpembuatanmateri").outerHTML;
}

function getdaftarnilai() {
    // ---- CARI DATA BERDASARKAN TABEL ID "tabel_riwayat_materi", yang dicari adalah:
    // -- 1: Token, 
    //bersihkan dulu tempatnya;
    datasiswatoken.innerHTML = "";

    var caritokenini = document.getElementById("getidtoken").value;
    var sumbertabel = document.getElementById("tabel_riwayat_materi");
    if (sumbertabel == null) {
        alert("Kami Arahkan untuk membaca Riwayat Materi yang Anda buat. Tujuannya untuk mengenali token yang Anda isi");
        pembelajaran()
    } else {
        var jumlahbarissumbertabel = sumbertabel.rows.length;
        for (a = 0; a < sumbertabel.rows.length; a++) {
            if (sumbertabel.rows[a].cells[2].innerHTML == caritokenini) {
                var barisyangdicari = a
            }
        }

        //--------- AMBIL DATATOKEN DULU DAN MENYEDIAKAN ID UNTUK JUMLAHSOAL PG DAN ESSAY-----------
        var tabeldatatoken = document.createElement("table");
        tabeldatatoken.setAttribute("class", "versi-table");
        tabeldatatoken.setAttribute("id", "tabel_data_token");
        var tr = tabeldatatoken.insertRow(-1);
        var td = tr.insertCell(-1);
        td.innerHTML = "Token"
        var td = tr.insertCell(-1);
        td.innerHTML = sumbertabel.rows[barisyangdicari].cells[2].innerHTML
        var tr = tabeldatatoken.insertRow(-1);
        var td = tr.insertCell(-1);
        td.innerHTML = "Mata Pelajaran/Tema"
        var td = tr.insertCell(-1);
        td.innerHTML = sumbertabel.rows[barisyangdicari].cells[4].innerHTML
        var tr = tabeldatatoken.insertRow(-1);
        var td = tr.insertCell(-1);
        td.innerHTML = "Jumlah Soal PG"
        var td = tr.insertCell(-1);
        td.innerHTML = sumbertabel.rows[barisyangdicari].cells[7].innerHTML
        var tr = tabeldatatoken.insertRow(-1);
        var td = tr.insertCell(-1);
        td.innerHTML = "Jumlah Soal Essay"
        var td = tr.insertCell(-1);
        td.innerHTML = sumbertabel.rows[barisyangdicari].cells[8].innerHTML

        datatoken.innerHTML = "<h4>Data Token</h4>";
        datatoken.appendChild(tabeldatatoken);
        var jumlahsoalpg = sumbertabel.rows[barisyangdicari].cells[7].innerHTML
    }
    //--------- AMBIL DAFTAR SISWA SESUAI DENGAN DATA TABEL SISWA -----------//

    // ------ DATA DIBUAT DALAM BENTUK JSON SCRIPT -----------------
    var kelaslogin = document.getElementById("kelassayapilih").innerHTML;
    var sumberkelasnama = document.getElementsByClassName("koleksinamakelas" + kelaslogin);

    var tabeldatanilai = document.createElement("table");
    tabeldatanilai.setAttribute("id", "tabel_data_nilai");
    tabeldatanilai.setAttribute("class", "versi-table")
    tabeldatanilai.setAttribute("style", "border-collapse:collapse;border:1px solid black");
    var tr = tabeldatanilai.insertRow(-1)
    var th1 = document.createElement("th");
    th1.innerHTML = "No.";
    var th2 = document.createElement("th");
    th2.innerHTML = "Nama Siswa";
    tr.appendChild(th1);
    tr.appendChild(th2);

    var jumlahsoalPG = tabel_data_token.rows[2].cells[1].innerHTML
    if (jumlahsoalPG !== "") { //Jika tidak ada PG maka ga usah bikin kolom 
        var th3 = document.createElement("th");
        th3.innerHTML = "Skor PG";
        tr.appendChild(th3);
    }
    var jumlahsoalEssay = tabel_data_token.rows[3].cells[1].innerHTML
    if (jumlahsoalEssay !== "") {
        var th4 = document.createElement("th");
        th4.innerHTML = "Skor Essay";
        tr.appendChild(th4);
    }
    var th5 = document.createElement("th");
    th5.innerHTML = "Jumlah Nilai";
    tr.appendChild(th5);

    for (var i = 0; i < sumberkelasnama.length; i++) {
        var brs = tabeldatanilai.insertRow(-1);
        var cell1 = brs.insertCell(-1);
        cell1.innerHTML = (i + 1);
        var cell1 = brs.insertCell(-1);
        cell1.innerHTML = sumberkelasnama[i].innerHTML;
        var namasiswaini = sumberkelasnama[i].innerHTML;

        //PG 
        var jumlahsoalPG = tabel_data_token.rows[2].cells[1].innerHTML
        if (jumlahsoalPG !== "") { //Jika tidak ada PG maka ga usah bikin kolom 
            var cell1 = brs.insertCell(-1);
            cell1.innerHTML = "<i class='fa fa-spin fa-spinner'></i>"
        }
        //essay
        var jumlahsoalEssay = tabel_data_token.rows[3].cells[1].innerHTML
        if (jumlahsoalEssay !== "") {
            var cell1 = brs.insertCell(-1);
            cell1.innerHTML = "'-";
        }
        var cell1 = brs.insertCell(-1);
        cell1.innerHTML = "'-"
    }



    // ----- tabel analisis PG 
    var jumlahsoalPG = tabel_data_token.rows[2].cells[1].innerHTML;
    if (jumlahsoalPG !== "") {
        var tabelanalisispg = document.createElement("table");
        tabelanalisispg.setAttribute("id", "tabel_data_analisis");
        tabelanalisispg.setAttribute("class", "table2excel versii-table")
        tabelanalisispg.setAttribute("style", "border-collapse:collapse;border:1px solid black");
        tabelanalisispg.setAttribute("data-tableName", "Test Table 1")
        //data-tableName="Test Table 1"
        var tr = tabelanalisispg.insertRow(-1)
        var th1 = document.createElement("th");
        th1.setAttribute("rowspan", "2");
        th1.innerHTML = "No.";
        var th2 = document.createElement("th");
        th2.setAttribute("rowspan", "2");
        th2.innerHTML = "Nama Siswa";
        var th3 = document.createElement("th");
        th3.setAttribute("rowspan", "2");
        th3.innerHTML = "Skor PG";
        var th4 = document.createElement("th");
        th4.setAttribute("colspan", jumlahsoalpg);
        th4.innerHTML = "Pilihan Ganda";
        var th5 = document.createElement("th");
        th5.setAttribute("colspan", jumlahsoalpg)
        th5.innerHTML = "Nilai Tiap PG"

        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(th4);
        tr.appendChild(th5);



        var tr2 = tabelanalisispg.insertRow(-1)
        //var tdkosong = tr2.insertCell(-1);
        //var tdkosong = tr2.insertCell(-1);
        //var tdkosong = tr2.insertCell(-1);
        for (var j = 0; j < jumlahsoalpg; j++) {
            var th7 = document.createElement("th");
            th7.innerHTML = (j + 1);
            tr2.appendChild(th7);
        }
        for (var j = 0; j < jumlahsoalpg; j++) {
            var th8 = document.createElement("th");
            th8.innerHTML = (j + 1);
            tr2.appendChild(th8);
        }

        for (var i = 0; i < sumberkelasnama.length; i++) {
            var brs = tabelanalisispg.insertRow(-1);
            var p = i % 17;
            var cell1 = brs.insertCell(-1);
            if (p == 0) {
                cell1.setAttribute("style", "break-after:page")
            };
            cell1.innerHTML = (i + 1);
            var cell1 = brs.insertCell(-1);
            cell1.innerHTML = sumberkelasnama[i].innerHTML;

            var cell1 = brs.insertCell(-1);
            //cell1.innerHTML = "<i class='fa fa-spin fa-spinner'></i>"

            for (var j = 0; j < jumlahsoalpg; j++) {
                //var tr2 = tabelanalisispg.insertRow(-1)
                var cell1 = brs.insertCell(-1);
                //cell1.innerHTML = "P" + (j+1)
            }
            for (var j = 0; j < jumlahsoalpg; j++) {
                //var tr2 = tabelanalisispg.insertRow(-1)
                var cell1 = brs.insertCell(-1);
                //cell1.innerHTML = "SkorPG_" + (j+1)
            }

        }

        // -- SELESAI TABEL ANALISIS PG

        var url = "https://script.google.com/macros/s/AKfycbwLeZkdqHemahH9oJbNqTVWQ4kQoE71QfwwCMYUZGw_4926zDTT/exec?action=	respon_nilai"
        $.getJSON(url, function (json) {
            //menentukan idheaderguru
            var dataheader = [];
            var dataskor = []
            for (t in json.records[0]) {
                if (t.indexOf("PG_") > -1) {
                    dataheader.push(t)
                };
                if (t.indexOf("SKOR_") > -1) {
                    dataskor.push(t)
                }
            }

            var baristabel = document.getElementById("tabel_data_nilai").rows
            for (var a = 1; a < baristabel.length; a++) {
                baristabel[a].cells[2].innerHTML = "";
                var x = baristabel[a].cells[1].innerHTML

                for (var b = 0; b < json.records.length; b++) {
                    //if(json.records[b].namasiswa == x){
                    if (json.records[b].namasiswa == x && json.records[b].idtoken == caritokenini) {
                        baristabel[a].cells[2].innerHTML = (json.records[b].nilaiPG).replace(".", ",");
                        baristabel[a].cells[3].innerHTML = "";
                        var adanilaiessay = (json.records[b].nilaiEssay).replace(".", ",");
                        if (adanilaiessay == "") {
                            var btn = document.createElement("button")
                            btn.setAttribute("onclick", "koreksiessay('" + b + "<|>" + json.records[b].html_jawaban + "')")
                            btn.innerHTML = "Beri Nilai"
                            baristabel[a].cells[3].appendChild(btn)
                        } else {
                            baristabel[a].cells[3].innerHTML = adanilaiessay;
                            baristabel[a].cells[4].innerHTML = (((json.records[b].nilaiPG * 1 + json.records[b].nilaiEssay * 1) / 2).toFixed(2)).replace(".", ",");

                        }
                    }

                }
            }

            var baristabelanalisis = document.getElementById("tabel_data_analisis").rows
            for (a = 0; a < json.records.length; a++) {
                var namasiswajson = json.records[a].namasiswa;
                for (b = 2; b < baristabelanalisis.length; b++) {
                    var namasiswatabel = baristabelanalisis[b].cells[1].innerHTML
                    if (namasiswajson == namasiswatabel && json.records[a].idtoken == caritokenini) {
                        baristabelanalisis[b].cells[2].innerHTML = (json.records[a].nilaiPG).replace(".", ",");
                        var indekskorpg = (parseInt(jumlahsoalpg) + 3)
                        for (c = 0; c < jumlahsoalpg; c++) {
                            baristabelanalisis[b].cells[c + 3].innerHTML = json.records[a][dataheader[c]];
                            baristabelanalisis[b].cells[c + indekskorpg].innerHTML = json.records[a][dataskor[c]]
                        }
                    }
                    //baristabelanalisis[b].cells[2].innerHTML ="";
                }
            }

            //datasiswatoken.innerHTML = json.records[0].namasiswa;
            //console.log(myJson);
        })

        datasiswatoken.innerHTML = "<h4>Tabel Analisis Nilai</h4>";
        datasiswatoken.appendChild(tabeldatanilai)
        datasiswatoken.innerHTML += "<h4>Tabel Analisis Pilihan Ganda</h4>";
        var excel = document.createElement("button");
        excel.setAttribute("onclick", "tombollain()");
        excel.innerHTML = "<i class='fa fa-file-excel-o'></i> Simpan ke Ms. Excel"
        datasiswatoken.appendChild(excel);

        var print = document.createElement("button");
        print.setAttribute("onclick", "printanalisis()")
        print.innerHTML = "<i class='fa fa-print'></i> Print"


        datasiswatoken.appendChild(print);
        datasiswatoken.innerHTML += "<hr/>"
        datasiswatoken.appendChild(tabelanalisispg)
        //<button class="exportToExcel">Export to XLS</button>
        //var konsol = array_idpg()
        //console.log(konsol);
    }
    document.getElementById("judulpetunjuk").innerHTML = "";
    document.getElementById("isipetunjuk").innerHTML = "";
}

function printanalisis() {
    var id = "tabel_data_analisis";
    var h1 = "Tabel Analasis Soal Pilhan Ganda";
    var h2 = "Mata Pelajaran " + (document.getElementById("tabel_data_token").rows[1].cells[1].innerHTML).toUpperCase();
    var html = document.getElementById("iframeprint");
    var isi = html.contentDocument;
    var headnya = isi.head;
    while (headnya.hasChildNodes()) {
        headnya.removeChild(headnya.firstChild);
    }
    //var bodynya = isi.body;
    //bodynya="";

    var titlee = document.createElement("title");
    var teksjudul = document.createTextNode(":: e-LAMASO::")
    titlee.appendChild(teksjudul)
    headnya.appendChild(titlee);
    var css = '@page { size: landscape;}';
    //head = document.head || document.getElementsByTagName('head')[0],
    var style = document.createElement('style');
    var cssd = '.versii-table {width:950px;max-width:100%;border-collapse:collapse}.versii-table th,.versii-table td,.versii-table tr {border:1px solid #000;color:#000;padding:5px 10px 5px 10px}.versii-table th{background-color:#eee;color:blue;vertical-align:middle;text-align:center}.versii-table tr:nth-of-type(even) td{border:0;background-color:#fff;border:1px solid #000}versii-table tr:nth-of-type(odd) td{border:0;background-color:#eef;border:1px solid #000}.versi-table {width:auto;max-width:100%;border-collapse:collapse}.versi-table th,.versi-table td,.versi-table tr {border:1px solid #000;color:#000;padding:5px 10px 5px 10px}.versi-table th{background-color:#eee;color:blue;vertical-align:middle;text-align:center}.versi-table tr:nth-of-type(even) td{border:0;background-color:#fff;border:1px solid #000}versi-table tr:nth-of-type(odd) td{border:0;background-color:#eef;border:1px solid #000}';
    style.type = 'text/css';
    style.media = 'print';

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));

    }
    var d = new Date();
    var tglakhirr = d.getDate();
    var blnakhirr = d.getMonth();
    var namabulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    var thnakhirr = d.getFullYear();
    var tglakhir = d.getDate(); //daysInMonth(blnakhirr+1,thnakhirr);
    var namakepsekku = document.getElementById('namakepsek').innerHTML;
    var nipkepsekku = document.getElementById('nipkepsek').innerHTML;
    var guruapa = document.getElementById("tblguru").innerHTML + " " + document.frmlogin.kelasguru.value;
    var namaguruku = document.getElementById('namagurux').innerHTML;
    var nipguruku = document.getElementById('nipgurux').innerHTML;

    headnya.appendChild(style);
    var bodynya = isi.body;
    //var teksbody =document.getElementById(id).innerHTML;
    var teksbody = document.getElementById(id).outerHTML;
    bodynya.innerHTML = "";
    bodynya.innerHTML = '<style>' + cssd + '</style>';
    bodynya.innerHTML += '<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">';
    bodynya.innerHTML += '<h1 style="text-align:center">' + h1 + '</h1>';
    bodynya.innerHTML += '<h2 style="text-align:center">' + h2 + '</h2>';
    bodynya.innerHTML += teksbody;
    bodynya.innerHTML += '<br/><br/><br/>';
    bodynya.innerHTML += '<div style="float:left;position:relative;margin-left:50px;text-align:center">Mengetahui,<br/>Kepala ' + namasekolahku + '<br/><br/><br/><br/><br/><u><b>' + namakepsekku + '</b></u><br/>NIP. ' + nipkepsekku + '</div>';
    bodynya.innerHTML += '<div style="float:right;position:relative;text-align:center">' + namakotaku + ', ' + tglakhir + ' ' + namabulan[blnakhirr] + ' ' + thnakhirr + '<br/>' + guruapa + '<br/><br/><br/><br/><br/><b><u>' + namaguruku + '</u></b><br/>NIP. ' + nipguruku + '</div>';
    //bodynya.innerHTML+='<br/><br/><br/>'+guruapa+'<br/><br/><br/><b><u>'+namaguruku+'</u></b><br/>NIP. '+nipguruku+'</div>';


    window.frames["iframeprint"].focus();
    window.frames["iframeprint"].print();
}

function koreksiessay(bid) {
    alert("Anda akan mengoreksi data json " + bid + " dengan nilai b = " + bid.split("<|>")[0] + " dan idfile = " + bid.split("<|>")[1])
    var id = bid.split("<|>")[1];
    //document.getElementById("output").innerHTML="<i class='fa fa-spin fa-spinner'></i>";
    document.getElementById('modalpetunjuk').style.display = 'block';
    document.getElementById("judulpetunjuk").innerHTML = "<i class='fa fa-spin fa-spinner'></i>";

    var idm = encodeURIComponent(id);
    var en = "html_jawaban=" + idm;
    var url = "https://script.google.com/macros/s/AKfycbwLeZkdqHemahH9oJbNqTVWQ4kQoE71QfwwCMYUZGw_4926zDTT/exec?" + en + "&action=lembarjawaban";

    $.getJSON(url, function (json) {
        //$("#output").html(brkline(json))
        document.getElementById("judulpetunjuk").innerHTML = "Lembar Jawaban Siswa";
        document.getElementById("isipetunjuk").innerHTML += "<div style='border:1px solid blue;padding:5px;'> Petunjuk:<br/><br/>Isikan nilai pada masing-masing jawaban siswa dengan rentang nilai dari 0 - 100<br/><br/>Setelah Anda selesai mengisi nilai, maka klik tombol <b>Beri Nilai</b> pada laman paling bawah.</div>";
        document.getElementById("isipetunjuk").innerHTML += brkline(json);
        var elEssay = document.getElementsByClassName("koleksilj")
        if (elEssay.length !== 0) {
            for (i = 0; i < elEssay.length; i++) {
                var idEl = elEssay[i].getAttribute("id");
                var inidEl = idEl.replace("untuklj", "");
                var tempattombol = document.getElementById("untuklj" + inidEl);
                var tombolsatu = document.createElement("input");
                tombolsatu.setAttribute("type", "number");
                tombolsatu.setAttribute("class", "koreksisoal");
                tombolsatu.setAttribute("onchange", "updatenilaikoreksi()");
                tempattombol.innerHTML = "Beri Nilai :";
                tempattombol.appendChild(tombolsatu);


            }
        }

        var tengahdulu = document.createElement("center");
        var inputidbaris = document.createElement("input");
        inputidbaris.setAttribute("id", "brs");
        inputidbaris.setAttribute("value", bid.split("<|>")[0]);
        inputidbaris.setAttribute("disabled", "true");

        var inputnilaikoreksi = document.createElement("input");
        inputnilaikoreksi.setAttribute("type", "number");
        inputnilaikoreksi.setAttribute("id", "nilaiakhiressay");
        inputnilaikoreksi.setAttribute("disabled", "true");

        var tombolkirim = document.createElement("button");
        tombolkirim.setAttribute("onclick", "siapkirimnilai()")
        tombolkirim.innerHTML = "Beri Nilai";

        tengahdulu.appendChild(inputidbaris);
        tengahdulu.appendChild(inputnilaikoreksi);
        tengahdulu.appendChild(tombolkirim);
        document.getElementById("isipetunjuk").appendChild(tengahdulu);

    })



}

function siapkirimnilai() {
    var brsdata = (document.getElementById("brs").value) * 1 + 2;
    var nilaiessay = document.getElementById("nilaiakhiressay").value;
    var en = "brs=" + encodeURIComponent(brsdata) + "&nilaiEssay=" + encodeURIComponent(nilaiessay);
    var url = "https://script.google.com/macros/s/AKfycbwLeZkdqHemahH9oJbNqTVWQ4kQoE71QfwwCMYUZGw_4926zDTT/exec?action=koreksiessay"; //+en;
    //document.getElementById("isipetunjuk").style.display="none";
    var request = jQuery.ajax({

        crossDomain: true,
        url: url,
        data: en + "&callback=berhasilkah",
        dataType: "jsonp",
        method: "GET",
        success: function bershailkah(e) {
            document.getElementById("isipetunjuk").innerHTML = e.result;
            getdaftarnilai();
        }


    })


}

function updatenilaikoreksi() {
    var kelasinput = document.getElementsByClassName("koreksisoal");
    var nilai = 0;
    for (i = 0; i < kelasinput.length; i++) {
        nilai += kelasinput[i].value * 1;
    }
    var jumlahsoalessaysebenarnya = document.getElementById("tabel_data_token").rows[3].cells[1].innerHTML * 1;
    var nilaiakhir = (nilai / jumlahsoalessaysebenarnya).toFixed(2);
    //document.getElementById("nilaiakhiressay").value = nilai;
    document.getElementById("nilaiakhiressay").value = nilaiakhir;
}

function Koleksi_idpg() {
    var url = "https://script.google.com/macros/s/AKfycbwLeZkdqHemahH9oJbNqTVWQ4kQoE71QfwwCMYUZGw_4926zDTT/exec?action=	respon_nilai"
    var dataid = [];
    var isiannya = []
    $.getJSON(url, function (json) {
        for (a = 0; a < json.records.length; a++) {

            for (t in json.records[0]) {
                dataid.push(t)
                if (t.indexOf("PG_") > -1) {
                    isiannya.push(json.records[a][t])
                }
            }

        }

    })
    return isiannya
}

function array_idpg() {
    var url = "https://script.google.com/macros/s/AKfycbwLeZkdqHemahH9oJbNqTVWQ4kQoE71QfwwCMYUZGw_4926zDTT/exec?action=	respon_nilai"
    var dataid = []
    $.getJSON(url, function (json) {
        for (t in json.records[0]) {
            dataid.push(t)
        }

        var rows = json.records,
            data = [];

        for (var r = 0, l = rows.length; r < l; r++) {
            //for(r in json.records){
            var row = rows[r],
                record = {};

            for (var p in dataid) {
                record[dataid[p]] = row[dataid[p]]; //row[p];
            }

            data.push(record);
        }
        return data
        //console.log(data)
    })
}

function daftarnilai() {

    // menu navigasi
    //document.getElementById("bargurukelas").style.display ="block";
    //document.getElementById("barlogin").style.display ="none";
    w3_close(); // jika User menekan navigasi, setelah klik lalu tutup
    //div laman
    document.getElementById("mainmenulamaso").style.display = "block"; // data kelas ditampilkan 
    document.getElementById("mainlogin").style.display = "none"; // data kelas ditampilkan 
    // div tempat kerja guru kelas
    document.getElementById("divpembelajaran").style.display = "none"; // KBM 
    document.getElementById("divdaftarnilai").style.display = "block"; // KBM 
    document.getElementById("datakelassaya").style.display = "none"; // data kelas ditampilkan 
    document.getElementById("batasaksesguru").scrollIntoView();

}

function pembelajaran() {

    // menu navigasi
    //document.getElementById("bargurukelas").style.display ="block";
    //document.getElementById("barlogin").style.display ="none";
    w3_close(); // jika User menekan navigasi, setelah klik lalu tutup
    //div laman
    document.getElementById("mainmenulamaso").style.display = "block"; // data kelas ditampilkan 
    document.getElementById("mainlogin").style.display = "none"; // data kelas ditampilkan 
    // div tempat kerja guru kelas
    document.getElementById("divpembelajaran").style.display = "block"; // KBM 
    document.getElementById("divdaftarnilai").style.display = "none"; // KBM 
    document.getElementById("datakelassaya").style.display = "none"; // data kelas ditampilkan 
    document.getElementById("batasaksesguru").scrollIntoView();
    //////////
    document.formuploadmateri.idkelas.value = document.getElementById("kelassayapilih").innerHTML;
    /// memastikan opsi yang dipilih adalah kelas guru saat ini
    document.getElementById("previewpilihkelas").value = document.getElementById("kelassayapilih").innerHTML;
    // bersihkan riwayat ceklis
    document.getElementById("resultlink").innerHTML = "";
    var ceklis = document.getElementById("sayasetuju").checked = false;
    sayasetuju();
    // update riwayat materi	
    riwayatmateri();
}

function cekidguru() {
    var val = document.frmlogin.namaguru.value;
    var valnama = val.split("|")[0];
    var valkelas = val.split("|")[1];
    var valkelaskelasnya = valkelas.split(", ");
    var selectkelas = document.frmlogin.kelasguru;
    selectkelas.innerHTML = "";
    for (x in valkelaskelasnya) {
        var opsiawal = document.createElement("option");
        opsiawal.setAttribute("value", valkelaskelasnya[x]);
        opsiawal.setAttribute("selected", "true");
        var teksopsiawal = document.createTextNode(valkelaskelasnya[x]);
        opsiawal.appendChild(teksopsiawal);
        selectkelas.appendChild(opsiawal);
    }
    document.getElementById("loginpertama").style.display = "block";
}

function loginelamaso() {
    document.getElementById("modallogin").style.display = "block";

}

function gurulogin() {
    document.getElementById("kelassayapilih").innerHTML = document.frmlogin.kelasguru.value;


    var teksnamaguru = document.frmlogin.namaguru.value
    var arrnamaguru = teksnamaguru.split("|");
    var usernama = arrnamaguru[0];
    var userkelas = document.frmlogin.kelasguru.value;;
    var userjabatan = arrnamaguru[2];
    var usernip = arrnamaguru[3];
    // menampilkan logo guru:
    var link = arrnamaguru[4];

    var linksplit = link.replace("https://drive.google.com/file/d/", "");
    var linksplitt = linksplit.replace("/view?usp=drivesdk", "");
    var logo = document.getElementById("logosekolahmenu");
    logo.setAttribute("src", "https://drive.google.com/uc?export=view&id=" + linksplitt);
    logo.setAttribute("alt", "Poto Guru");
    logo.setAttribute("style", "width:90px; height:90px");



    document.getElementById("namagurux").innerHTML = usernama;
    document.getElementById("nipgurux").innerHTML = usernip;
    document.getElementById("tblguru").innerHTML = userjabatan;

    var namasekolah, namakota, tekstapel, tapel
    namasekolah = document.getElementById("namasekolah");
    namakota = document.getElementById("namakota");
    tapel = document.getElementById("tapel");

    var d = new Date();
    var blnsekarang = d.getMonth();
    var tahunsekarang = d.getFullYear();
    if (blnsekarang > 6) {
        tekstapel = tahunsekarang + "/" + parseInt(tahunsekarang) + 1;
    } else {
        tekstapel = parseInt(tahunsekarang) - 1 + "/" + tahunsekarang;
    }

    namasekolah.innerHTML = usernama;
    namakota.innerHTML = userjabatan + " " + userkelas;
    tapel.innerHTML = tekstapel;

    //control hide dan show
    //------------menu yang ditammpilkan saat guru login 
    document.getElementById("modallogin").style.display = "none"; // ini modal login 
    document.getElementById("loginpertama").style.display = "none"; // tombol login pada modal login 
    // menu navigasi
    document.getElementById("bargurukelas").style.display = "block";
    document.getElementById("barlogin").style.display = "none";
    w3_close(); // jika User menekan navigasi, setelah klik lalu tutup



    tabeldatakelassaya(); // 

}

function tabeldatakelassaya() { //menampilkan tabel data kelas

    //div laman
    document.getElementById("mainmenulamaso").style.display = "block"; // data kelas ditampilkan 
    document.getElementById("mainlogin").style.display = "none"; // data kelas ditampilkan 
    // div tempat kerja guru kelas
    document.getElementById("datakelassaya").style.display = "block"; // data kelas ditampilkan 
    document.getElementById("divdaftarnilai").style.display = "none"; // KBM 
    document.getElementById("divpembelajaran").style.display = "none"; // KBM 

    document.getElementById("batasaksesguru").scrollIntoView();

    var loadingkelassaya = document.getElementById("loadkelassaya");
    loadingkelassaya.innerHTML = "<i class='fa fa-spinner fa-spin w3-xxxlarge'></i>";

    var kelasguru = document.getElementById("kelassayapilih").innerHTML;

    var tempattabel = document.getElementById("tabeltempatdaftarkelassaya");
    tempattabel.innerHTML = "";
    tempattabel.innerHTML = "<h3>Daftar Siswa Kelas " + document.getElementById("kelassayapilih").innerHTML + "</div>";

    document.getElementById("cetakdatasiswa").removeAttribute("onclick");
    document.getElementById("cetakdatasiswa").setAttribute("onclick", "cetakini()");


    var tb = document.createElement("table")
    tb.setAttribute("class", "versi-table");
    tb.setAttribute("id", "myTable");

    var tr = tb.insertRow(0);
    var td1 = document.createElement("th");
    td1.innerHTML = "Edit";
    tr.appendChild(td1);
    var td2 = document.createElement("th");
    td2.innerHTML = "No.Urut";
    tr.appendChild(td2);
    var td3 = document.createElement("th");
    td3.innerHTML = "ID Siswa";
    tr.appendChild(td3);
    var td4 = document.createElement("th");
    td4.innerHTML = "No Induk Sekolah";
    tr.appendChild(td4);
    var td7 = document.createElement("th");
    td7.innerHTML = "N I S N";
    tr.appendChild(td7);
    var td5 = document.createElement("th");
    td5.setAttribute("style", "width:260px");
    td5.innerHTML = "Nama Siswa";

    tr.appendChild(td5);
    var td6 = document.createElement("th");
    td6.innerHTML = "Jenis Kelamin";
    tr.appendChild(td6);
    var td8 = document.createElement("th");
    td8.innerHTML = "Tempat Lahir";
    tr.appendChild(td8);
    var td9 = document.createElement("th");
    td9.innerHTML = "Tanggal Lahir";
    tr.appendChild(td9);
    var td10 = document.createElement("th");
    td10.innerHTML = "Agama";
    tr.appendChild(td10);
    var td11 = document.createElement("th");
    td11.innerHTML = "Nama Ayah";
    tr.appendChild(td11);
    var td12 = document.createElement("th");
    td12.innerHTML = "Nama Ibu";
    tr.appendChild(td12);
    var td13 = document.createElement("th");
    td13.innerHTML = "Kelas";
    tr.appendChild(td13);
    var td14 = document.createElement("th");
    td14.innerHTML = "No HP";
    tr.appendChild(td14);



    var a = 0;
    var b = 0; //Islam
    var c = 0; //Kristen
    var d = 0; //Katholik
    var e = 0; //Hindu
    var f = 0; //Budha
    var g = 0; //Khonghucu
    var l = 0; //laki=laki
    var p = 0; //perempuan

    var opsinamadipreviewhp = document.getElementById("previewpilihnama");
    opsinamadipreviewhp.innerHTML = "";

    var url = script_url + "?action=read";

    $.getJSON(url, function (json) {
        for (var i = 0; i < json.records.length; i++) {
            if (json.records[i].kelassaatini == kelasguru) {
                a += 1;

                if (json.records[i].jk == "L" || json.records[i].jk == "Laki-laki") {
                    l += 1;
                }
                if (json.records[i].jk == "P" || json.records[i].jk == "Perempuan") {
                    p += 1;
                }

                if (json.records[i].agama == "Islam") {
                    b += 1;
                }
                if (json.records[i].agama == "Kristen") {
                    c += 1
                }
                if (json.records[i].agama == "Katholik") {
                    d += 1
                }
                if (json.records[i].agama == "Hindu") {
                    e += 1
                }
                if (json.records[i].agama == "Budha") {
                    f += 1
                }
                if (json.records[i].agama == "Khonghucu") {
                    g += 1
                }


                tr = tb.insertRow(-1);
                var tabCell = tr.insertCell(-1);
                //		var tmboledit = document.createElement("button");
                //			tmboledit.setAttribute("onclick","editsiswa('"+i+"')");
                //			tmboledit.innerHTML="Edit";
                //		var tmbolhapus=document.createElement("button");
                //			tmbolhapus.setAttribute("onclick","hapussiswa('"+i+"')");
                //			tmbolhapus.innerHTML="Hapus";
                //		tabcell.appendChild(tmboledit);
                var btnn = document.createElement("button");
                btnn.setAttribute("onclick", "editsiswa('" + json.records[i].ID + "')");
                btnn.innerHTML = "Edit";
                var btnnn = document.createElement("button");
                btnnn.setAttribute("onclick", "hapussiswa('" + json.records[i].ID + "')");
                btnnn.innerHTML = "Hapus";
                tabCell.appendChild(btnn);
                tabCell.appendChild(btnnn);

                tabCell = tr.insertCell(-1);
                tabCell.innerHTML = a;
                tabCell = tr.insertCell(-1);
                tabCell.innerHTML = "<span id='idsiswa" + json.records[i].ID + "'>" + json.records[i].ID + "</span>";
                tabCell = tr.insertCell(-1);
                tabCell.innerHTML = "<span id='nissiswa" + json.records[i].ID + "'>" + json.records[i].nipd + "</span>";
                tabCell = tr.insertCell(-1);
                tabCell.innerHTML = "<span id='nisnsiswa" + json.records[i].ID + "'>" + json.records[i].nisn + "</span>";
                tabCell = tr.insertCell(-1);
                tabCell.innerHTML = "<span class='koleksinamakelas" + kelasguru + "' id='namasiswa" + json.records[i].ID + "'>" + json.records[i].NAME + "</span>";
                tabCell = tr.insertCell(-1);
                tabCell.innerHTML = "<span id='jksiswa" + json.records[i].ID + "'>" + json.records[i].jk + "</span>";
                tabCell = tr.insertCell(-1);
                tabCell.innerHTML = "<span id='tempatlahirsiswa" + json.records[i].ID + "'>" + json.records[i].tempatlahir + "</span>";
                tabCell = tr.insertCell(-1);
                tabCell.innerHTML = "<span id='tanggallahirsiswa" + json.records[i].ID + "'>" + json.records[i].tanggallahir + "</span>";
                tabCell = tr.insertCell(-1);
                tabCell.innerHTML = "<span id='agamasiswa" + json.records[i].ID + "'>" + json.records[i].agama + "</span>";
                tabCell = tr.insertCell(-1);
                tabCell.innerHTML = "<span id='namaayahsiswa" + json.records[i].ID + "'>" + json.records[i].namaayah + "</span>";
                tabCell = tr.insertCell(-1);
                tabCell.innerHTML = "<span id='namaibusiswa" + json.records[i].ID + "'>" + json.records[i].namaibu + "</span>";
                tabCell = tr.insertCell(-1);
                tabCell.innerHTML = "<span id='kelassiswa" + json.records[i].ID + "'>" + json.records[i].kelassaatini + "</span>";
                tabCell = tr.insertCell(-1);
                var nohpreplace = json.records[i].hp;

                tabCell.innerHTML = "<span id='hpsiswa_" + encodeURIComponent(json.records[i].NAME) + "'>" + json.records[i].hp + "</span>";

                //untuk membuat koleksi opsi nama pada beberapa form
                // --- 01 form pada preview HP di element select id = previewpilihnama
                var bikinopsinama = document.createElement("option");
                bikinopsinama.setAttribute("value", json.records[i].NAME);
                var teksopsinama = document.createTextNode(json.records[i].NAME);
                bikinopsinama.appendChild(teksopsinama);

                opsinamadipreviewhp.appendChild(bikinopsinama);
            }
            var aa = a;
            var bb = b;
            var cc = c;
            var dd = d;
            var ee = e;
            var ff = f;
            var pp = p;
            var ll = l;
            document.getElementById("tbljumlahsiswa").innerHTML = aa; // +" Siswa.";
            document.getElementById("tbljumlahlakilaki").innerHTML = ll + " Siswa.";
            document.getElementById("tbljumlahperempuan").innerHTML = pp + " Siswa.";
            document.getElementById("tblberagamaislam").innerHTML = bb + " Siswa.";
            document.getElementById("tblberagamakristen").innerHTML = cc + " Siswa.";
            document.getElementById("tblberagamakatholik").innerHTML = dd + " Siswa.";
            document.getElementById("tblberagamahindu").innerHTML = ee + " Siswa.";
            document.getElementById("tblberagamakhonghucu").innerHTML = ff + " Siswa.";
        }
        loadingkelassaya.innerHTML = "";

    })

    tempattabel.appendChild(tb);
    var btnx = document.createElement("h3");
    btnx.innerHTML = "Klik di sini untuk menambah siswa saya:";
    var btnv = document.createElement("button");
    btnv.setAttribute("onclick", "tambahsiswa()");
    btnv.innerHTML = "TAMBAH SISWA SAYA";
    tempattabel.appendChild(btnx);
    tempattabel.appendChild(btnv);







}

function cetakini() {
    var datasiswadiv = document.getElementById("datasiswaprint");
    datasiswadiv.innerHTML = "";
    var tabelhasil = document.createElement("table");
    tabelhasil.setAttribute("class", "versi-table");
    tabelhasil.setAttribute("id", "myTableCopy");

    var tabeleditt = document.getElementById("myTable").getElementsByTagName("tbody")[0];
    var cln = tabeleditt.cloneNode(true);
    tabelhasil.appendChild(cln);
    datasiswadiv.appendChild(tabelhasil);
    var tabeledit = document.getElementById("myTableCopy");
    for (i = 0; i < tabeledit.rows.length; i++) {
        for (j = 0; j < 4; j++) {
            if (j == 0 || j == 1) {
                tabeledit.rows[i].deleteCell(j)
            }
        };


    }
    var kelass = document.getElementById("kelassayapilih").innerHTML;
    var tapel = document.getElementById("tapel").innerHTML;

    print("datasiswaprint,Daftar Siswa Kelas " + kelass + ",Tahun Pelajaran " + tapel + ",2020-7-13");
    datasiswadiv.innerHTML = "";

}

function print(x) {
    var splitt = x.split(',')

    var id = splitt[0],
        h1 = splitt[1],
        h2 = splitt[2],
        bulan = splitt[3];

    var html = document.getElementById("iframeprint");
    var isi = html.contentDocument;
    var headnya = isi.head;
    while (headnya.hasChildNodes()) {
        headnya.removeChild(headnya.firstChild);
    }
    //var bodynya = isi.body;
    //bodynya="";

    var titlee = document.createElement("title");
    var teksjudul = document.createTextNode(":: e-LAMASO::")
    titlee.appendChild(teksjudul)
    headnya.appendChild(titlee);
    var css = '@page { size: landscape;}';
    //head = document.head || document.getElementsByTagName('head')[0],
    var style = document.createElement('style');
    var cssd = '.versii-table {width:950px;max-width:100%;border-collapse:collapse}.versii-table th,.versii-table td,.versii-table tr {border:1px solid #000;color:#000;padding:5px 10px 5px 10px}.versii-table th{background-color:#eee;color:blue;vertical-align:middle;text-align:center}.versii-table tr:nth-of-type(even) td{border:0;background-color:#fff;border:1px solid #000}versii-table tr:nth-of-type(odd) td{border:0;background-color:#eef;border:1px solid #000}.versi-table {width:auto;max-width:100%;border-collapse:collapse}.versi-table th,.versi-table td,.versi-table tr {border:1px solid #000;color:#000;padding:5px 10px 5px 10px}.versi-table th{background-color:#eee;color:blue;vertical-align:middle;text-align:center}.versi-table tr:nth-of-type(even) td{border:0;background-color:#fff;border:1px solid #000}versi-table tr:nth-of-type(odd) td{border:0;background-color:#eef;border:1px solid #000}';
    style.type = 'text/css';
    style.media = 'print';

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));

    }
    var d = new Date(bulan);
    var tglakhirr = d.getDate();
    var blnakhirr = d.getMonth();
    var namabulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    var thnakhirr = d.getFullYear();
    var tglakhir = d.getDate(); //daysInMonth(blnakhirr+1,thnakhirr);
    var namakepsekku = document.getElementById('namakepsek').innerHTML;
    var nipkepsekku = document.getElementById('nipkepsek').innerHTML;
    var guruapa = document.getElementById("tblguru").innerHTML + " " + document.frmlogin.kelasguru.value;
    var namaguruku = document.getElementById('namagurux').innerHTML;
    var nipguruku = document.getElementById('nipgurux').innerHTML;

    headnya.appendChild(style);
    var bodynya = isi.body;
    var teksbody = document.getElementById(id).innerHTML;
    //var teksbody =document.getElementById(id).outerHTML;
    bodynya.innerHTML = "";
    bodynya.innerHTML = '<style>' + cssd + '</style>';
    bodynya.innerHTML += '<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">';
    bodynya.innerHTML += '<h1 style="text-align:center">' + h1 + '</h1>';
    bodynya.innerHTML += '<h2 style="text-align:center">' + h2 + '</h2>';
    bodynya.innerHTML += teksbody;
    bodynya.innerHTML += '<br/><br/><br/>';
    bodynya.innerHTML += '<div style="float:left;position:relative;margin-left:50px;text-align:center">Mengetahui,<br/>Kepala ' + namasekolahku + '<br/><br/><br/><br/><br/><u><b>' + namakepsekku + '</b></u><br/>NIP. ' + nipkepsekku + '</div>';
    bodynya.innerHTML += '<div style="float:right;position:relative;text-align:center">' + namakotaku + ', ' + tglakhir + ' ' + namabulan[blnakhirr] + ' ' + thnakhirr + '<br/>' + guruapa + '<br/><br/><br/><br/><br/><b><u>' + namaguruku + '</u></b><br/>NIP. ' + nipguruku + '</div>';
    //bodynya.innerHTML+='<br/><br/><br/>'+guruapa+'<br/><br/><br/><b><u>'+namaguruku+'</u></b><br/>NIP. '+nipguruku+'</div>';


    window.frames["iframeprint"].focus();
    window.frames["iframeprint"].print();

}

function printportrait(x) {
    var splitt = x.split(',')

    var id = splitt[0],
        h1 = splitt[1],
        h2 = splitt[2],
        bulan = splitt[3];

    var html = document.getElementById("iframeprint");
    var isi = html.contentDocument;
    var headnya = isi.head;
    while (headnya.hasChildNodes()) {
        headnya.removeChild(headnya.firstChild);
    }
    //var bodynya = isi.body;
    //bodynya="";

    var titlee = document.createElement("title");
    var teksjudul = document.createTextNode(":: e-LAMASO::")
    titlee.appendChild(teksjudul)
    headnya.appendChild(titlee);
    var css = '@page { size: portrait;}';
    //head = document.head || document.getElementsByTagName('head')[0],
    var style = document.createElement('style');
    var cssd = '.versii-table {width:950px;max-width:100%;border-collapse:collapse}.versii-table th,.versii-table td,.versii-table tr {border:1px solid #000;color:#000;padding:5px 10px 5px 10px}.versii-table th{background-color:#eee;color:blue;vertical-align:middle;text-align:center}.versii-table tr:nth-of-type(even) td{border:0;background-color:#fff;border:1px solid #000}versii-table tr:nth-of-type(odd) td{border:0;background-color:#eef;border:1px solid #000}.versi-table {width:auto;max-width:100%;border-collapse:collapse}.versi-table th,.versi-table td,.versi-table tr {border:1px solid #000;color:#000;padding:5px 10px 5px 10px}.versi-table th{background-color:#eee;color:blue;vertical-align:middle;text-align:center}.versi-table tr:nth-of-type(even) td{border:0;background-color:#fff;border:1px solid #000}versi-table tr:nth-of-type(odd) td{border:0;background-color:#eef;border:1px solid #000}';
    style.type = 'text/css';
    style.media = 'print';

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));

    }
    var d = new Date(bulan);
    var tglakhirr = d.getDate();
    var blnakhirr = d.getMonth();
    var namabulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    var thnakhirr = d.getFullYear();
    var tglakhir = daysInMonth(blnakhirr + 1, thnakhirr);
    var namakepsekku = document.getElementById('namakepsek').innerHTML;
    var nipkepsekku = document.getElementById('nipkepsek').innerHTML;
    var guruapa = document.getElementById("tblguru").innerHTML + " " + document.frmlogin.kelasguru.value;
    var namaguruku = document.getElementById('namagurux').innerHTML;
    var nipguruku = document.getElementById('nipgurux').innerHTML;

    headnya.appendChild(style);
    var bodynya = isi.body;
    var teksbody = document.getElementById(id).innerHTML;
    bodynya.innerHTML = "";
    bodynya.innerHTML = '<style>' + cssd + '</style>';
    bodynya.innerHTML += '<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">';
    bodynya.innerHTML += '<h1 style="text-align:center">' + h1 + '</h1>';
    bodynya.innerHTML += '<h2 style="text-align:center">' + h2 + '</h2>';
    bodynya.innerHTML += teksbody;
    bodynya.innerHTML += '<br/><br/><br/>';
    bodynya.innerHTML += '<div style="float:left;position:relative;margin-left:50px;text-align:center">Mengetahui,<br/>Kepala ' + namasekolahku + '<br/><br/><br/><br/><br/><u><b>' + namakepsekku + '</b></u><br/>NIP. ' + nipkepsekku + '</div>';
    bodynya.innerHTML += '<div style="float:right;position:relative;text-align:center">' + namakotaku + ', ' + tglakhir + ' ' + namabulan[blnakhirr] + ' ' + thnakhirr + '<br/>' + guruapa + '<br/><br/><br/><br/><br/><b><u>' + namaguruku + '</u></b><br/>NIP. ' + nipguruku + '</div>';
    //bodynya.innerHTML+='<br/><br/><br/>'+guruapa+'<br/><br/><br/><b><u>'+namaguruku+'</u></b><br/>NIP. '+nipguruku+'</div>';


    window.frames["iframeprint"].focus();
    window.frames["iframeprint"].print();

}

function logout() {
    var namasekolah, namakota, tekstapel, tapel
    var logo = document.getElementById("logosekolahmenu");
    logo.setAttribute("src", "https://1.bp.blogspot.com/-q57d59JTX8g/Xa-kAy6T0XI/AAAAAAAAOSo/seM01RU3Q_Q7BvLm73wC09BBsQMs05pYACLcBGAsYHQ/s320/LOGO%2BLAMASO.png");

    namasekolah = document.getElementById("namasekolah");
    namakota = document.getElementById("namakota");
    tapel = document.getElementById("tapel");

    var d = new Date();
    var blnsekarang = d.getMonth();
    var tahunsekarang = d.getFullYear();
    if (blnsekarang > 6) {
        tekstapel = tahunsekarang + "/" + parseInt(tahunsekarang) + 1;
    } else {
        tekstapel = parseInt(tahunsekarang) - 1 + "/" + tahunsekarang;
    }

    namasekolah.innerHTML = "e- LAMASO";
    namakota.innerHTML = "Guru";
    tapel.innerHTML = tekstapel;

    document.getElementById("mainmenulamaso").style.display = "none";
    document.getElementById("mainlogin").style.display = "block";

    document.getElementById("bargurukelas").style.display = "none";
    document.getElementById("barlogin").style.display = "block";
    document.getElementById("barloading").innerHTML = "Anda Sudah Logout";
}

function editsiswa(idd) {
    alert("Edit/Hapus siswa dengan id= " + idd + " saat ini hanya bisa digunakan di e-Absensi. Tunggu versi selnjutnya");
}

function eksekusimodal() { //fungsi untuk mengirimkan data yang akan diubah identitas siswa
    alert("Edit/Hapus siswa dengan id= " + idd + " saat ini hanya bisa digunakan di e-Absensi. Tunggu versi selnjutnya");
}

function ctrlx(e) { //fungsi menampilkan result dari pengiriman atau result
    alert("Edit/Hapus siswa dengan id= " + idd + " saat ini hanya bisa digunakan di e-Absensi. Tunggu versi selnjutnya");
}

function hapussiswa(idd) {
    alert("Hapus siswa dengan id= " + idd + " saat ini hanya bisa digunakan di e-Absensi. Tunggu versi selnjutnya");
}

function tambahsiswa() {
    alert("tambah siswa saat ini hanya bisa digunakan di e-Absensi. Tunggu versi selnjutnya");
}

/////////////////// SCRIPT UNTUK GURU UMUM YANG TIDAK PUNYA HAK AKSES SAMA JUGA SCRIPT UNTUK SISWA ///////////////////
var modal = document.getElementById('id01'); // Get the modal
var mySidebar = document.getElementById("mySidebar"); // Get the Sidebar
var overlayBg = document.getElementById("myOverlay"); // Get the DIV with overlay effect
function w3_open() { // Toggle between showing and hiding the sidebar, and add overlay effect
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        overlayBg.style.display = "none";
    } else {
        mySidebar.style.display = 'block';
        overlayBg.style.display = "block";
    }
}

function w3_close() { // Close the sidebar with the close button
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
}
