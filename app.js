// --- 1. DATA JADWAL (JSON) ---
const dailyScheduleData = [
    {
        "waktu": "05:00 - 07:30",
        "durasi": "2j 30m",
        "aktivitas_utama": "Ritual Pagi & Persiapan",
        "keterangan": "Bangun, Meditasi/Doa, Olahraga, Mandi, Sarapan Sehat.",
        "css_class": "morning",
        "icon_fa": "fa-sun"
    },
    {
        "waktu": "07:30 - 11:00",
        "durasi": "3j 30m",
        "aktivitas_utama": "Blok Belajar Pagi",
        "kategori": "Belajar Fokus",
        "target": "Target: 3 Jam Belajar Intensif (3 Sesi Pomodoro)",
        "jeda": "Break 15 menit (08:30) & 15 menit (09:45)",
        "css_class": "focus",
        "icon_fa": "fa-brain"
    },
    {
        "waktu": "11:00 - 12:30",
        "durasi": "90m",
        "aktivitas_utama": "Istirahat Besar & Makan Siang",
        "kategori": "Recharge Energi",
        "keterangan": "Istirahat total. Hindari topik pekerjaan/belajar.",
        "css_class": "break-lg",
        "icon_fa": "fa-utensils"
    },
    {
        "waktu": "12:30 - 14:45",
        "durasi": "2j 15m",
        "aktivitas_utama": "Blok Belajar Siang",
        "kategori": "Belajar Fokus",
        "target": "Target: 2 Jam Belajar Intensif (2 Sesi Pomodoro)",
        "jeda": "Break 15 menit (13:30)",
        "css_class": "focus",
        "icon_fa": "fa-laptop-code"
    },
    {
        "waktu": "14:45 - 19:00",
        "durasi": "4j 15m",
        "aktivitas_utama": "Waktu Fleksibel, Tugas Ringan, Hobi",
        "keterangan": "Mengerjakan tugas ringan, balasan email, atau waktu luang.",
        "css_class": "evening",
        "icon_fa": "fa-home"
    },
    {
        "waktu": "19:00 - 21:00",
        "durasi": "2j",
        "aktivitas_utama": "Makan Malam & Sosial/Keluarga",
        "keterangan": "Waktu bersantai dengan orang terdekat.",
        "css_class": "evening",
        "icon_fa": "fa-users"
    },
    {
        "waktu": "21:00 - 22:00",
        "durasi": "60m",
        "aktivitas_utama": "Relaksasi & Perencanaan Besok",
        "keterangan": "Baca buku non-edukasi, siapkan rencana/jurnal.",
        "css_class": "evening",
        "icon_fa": "fa-book-open"
    },
    {
        "waktu": "22:00",
        "durasi": "7-8 jam",
        "aktivitas_utama": "TIDUR (Wajib)",
        "keterangan": "Target tidur 7-8 jam untuk mengoptimalkan memori dan fokus besok pagi.",
        "css_class": "sleep",
        "icon_fa": "fa-moon"
    }
];

// --- 2. FUNGSI RENDERING ---
function renderSchedule() {
    const container = document.getElementById('schedule-timeline-container');
    let htmlContent = '';

    dailyScheduleData.forEach(item => {
        // Ambil kelas CSS dan ikon dari data
        const activityClass = item.css_class || 'default';
        const iconClass = item.icon_fa || 'fa-clipboard-list';

        // Buat struktur HTML untuk satu aktivitas
        htmlContent += `
            <div class="activity ${activityClass}">
                <div class="time-block">${item.waktu}</div>
                <div class="detail-card">
                    <i class="fas ${iconClass} icon"></i>
                    <h2>${item.aktivitas_utama}</h2>
                    ${item.target ? `<p class="target-info">${item.target}</p>` : ''}
                    <p>${item.keterangan}</p>
                    ${item.jeda ? `<div class="break-time">${item.jeda}</div>` : ''}
                </div>
            </div>
        `;
    });

    // Masukkan konten HTML yang sudah jadi ke dalam container
    container.innerHTML = htmlContent;
}