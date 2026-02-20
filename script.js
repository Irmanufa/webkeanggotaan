// ========== SCRIPT.JS - PREMIUM VERSION ==========

// Data anggota lengkap dari file (56 aktif, 34 pasif)
const anggotaData = [
  {
    code: "24.01.001",
    name: "Agung Ubaidillah",
    gender: "Laki-laki",
    status: "Aktif",
    divisi: "Ketua Umum IRMANUFA",
  },
  {
    code: "24.01.002",
    name: "Nalendra Maheswara",
    gender: "Laki-Laki",
    status: "Aktif",
    divisi: "Wakil Ketua Umum",
  },
  {
    code: "24.01.003",
    name: "Aisah Zaskia",
    gender: "Perempuan",
    status: "Aktif",
    divisi: "Sekretaris Umum 1",
  },
  {
    code: "24.01.004",
    name: "Tasya Amelia Putri",
    gender: "Perempuan",
    status: "Aktif",
    divisi: "Sekretaris Umum 2",
  },
  {
    code: "24.01.005",
    name: "Dwi Fathi Malika lubna",
    gender: "Perempuan",
    status: "Aktif",
    divisi: "Bendahara Umum 1",
  },
  {
    code: "24.01.006",
    name: "Nursiva Salsabila",
    gender: "Perempuan",
    status: "Aktif",
    divisi: "Bendahara Umum 2",
  },
  {
    code: "24.01.007",
    name: "Moldi Trio Ringgo Hervavi",
    gender: "Laki-Laki",
    status: "Aktif",
    divisi: "Ketua Divisi Keagamaan Dan Kemasjidan",
  },
  {
    code: "24.01.008",
    name: "Iim Indriani",
    gender: "Perempuan",
    status: "Aktif",
    divisi: "Anggota Divisi Keagamaan Dan Kemasjidan",
  },
  {
    code: "24.01.009",
    name: "Faturrohman",
    gender: "Laki-Laki",
    status: "Aktif",
    divisi: "Anggota Divisi HUMAS",
  },
  {
    code: "24.01.010",
    name: "Faiz Rhardika Chandra",
    gender: "Laki-laki",
    status: "Aktif",
    divisi: "Anggota Divisi Keagamaan Dan Kemasjidan",
  },
  {
    code: "24.01.011",
    name: "Tsany Lukmanul Hakim",
    gender: "Laki-Laki",
    status: "Aktif",
    divisi: "Anggota Divisi Keagamaan Dan Kemasjidan",
  },
  {
    code: "24.01.012",
    name: "Faqih Guntur Samudra",
    gender: "Laki-Laki",
    status: "Aktif",
    divisi: "Anggota Divisi Keagamaan Dan Kemasjidan",
  },
  {
    code: "24.01.013",
    name: "Danis Fahrudin",
    gender: "Laki-Laki",
    status: "Aktif",
    divisi: "Anggota Divisi PSDM",
  },
  {
    code: "24.01.014",
    name: "Ranti Puspita Sari",
    gender: "Perempuan",
    status: "Aktif",
    divisi: "Anggota Divisi HUMAS",
  },
  {
    code: "24.01.015",
    name: "HAFFIZAH",
    gender: "Perempuan",
    status: "Aktif",
    divisi: "Anggota Divisi Keskeretariatan",
  },
  {
    code: "24.01.016",
    name: "Muhamad Fahri",
    gender: "Laki-Laki",
    status: "Aktif",
    divisi: "Ketua Divisi Hubungan Masyarakat",
  },
  {
    code: "24.01.017",
    name: "Fahri Maulana",
    gender: "Laki-Laki",
    status: "Aktif",
    divisi: "Anggota Divisi PSDM",
  },
  {
    code: "24.01.018",
    name: "Fazril Januar",
    gender: "Laki-Laki",
    status: "Aktif",
    divisi: "Anggota Divisi HUMAS",
  },
  {
    code: "24.01.019",
    name: "M. Yasin",
    gender: "Laki-Laki",
    status: "Aktif",
    divisi: "Anggota Divisi HUMAS",
  },
  {
    code: "24.01.020",
    name: "Rizky Pratama",
    gender: "Laki-Laki",
    status: "Aktif",
    divisi: "Anggota DiVISI Kesekretariatan",
  },
  {
    code: "24.01.021",
    name: "Akhmad Fauzi Hanafi",
    gender: "Laki-Laki",
    status: "Aktif",
    divisi: "Ketua Divisi PHBI",
  },
  {
    code: "24.01.022",
    name: "Yoga Ady Lesmana",
    gender: "Laki-Laki",
    status: "Aktif",
    divisi: "Anggota Divisi PHBI",
  },
  {
    code: "24.01.023",
    name: "Ilyas Sahbi",
    gender: "Laki-Laki",
    status: "Aktif",
    divisi: "Ketua Divisi Pengembangan Sumber Daya Manusia",
  },
  {
    code: "24.01.024",
    name: "Lidya Febrianti",
    gender: "Perempuan",
    status: "Aktif",
    divisi: "Anggota Divisi Humas",
  },
  {
    code: "24.01.025",
    name: "Riski Akbar",
    gender: "Laki-Laki",
    status: "Aktif",
    divisi: "Anggota Divisi Kesekretariatan",
  },
  {
    code: "24.01.026",
    name: "Aditya Saputra",
    gender: "Laki-Laki",
    status: "Aktif",
    divisi: "Anggota Divisi PSDM",
  },
  {
    code: "24.01.027",
    name: "Hikaru Rian Putra",
    gender: "Laki-Laki",
    status: "Aktif",
    divisi: "Anggota Divisi Kesekretariatam",
  },
  {
    code: "24.01.028",
    name: "Agung Saputra",
    gender: "Laki-Laki",
    status: "Aktif",
    divisi: "Anggota Divisi Kesekretariatan",
  },
  {
    code: "24.01.029",
    name: "Wafiq Azizah",
    gender: "Perempuan",
    status: "Aktif",
    divisi: "Anggota Divisi Keagamaan Dan Kemasjidan",
  },
  {
    code: "24.01.030",
    name: "Siska Komalasari",
    gender: "Perempuan",
    status: "Aktif",
    divisi: "Anggota Divisi Keagamaan Dan Kemasjidan",
  },
  {
    code: "24.01.031",
    name: "Kareena",
    gender: "Perempuan",
    status: "Aktif",
    divisi: "Anggota Divisi PUBDEKDOK",
  },
  {
    code: "24.01.032",
    name: "Abdullah Fardani",
    gender: "Laki-Laki",
    status: "Aktif",
    divisi: "Ketua Divisi Kesekretariatan",
  },
  {
    code: "24.01.033",
    name: "Galank",
    gender: "Laki-laki",
    status: "Aktif",
    divisi: "Anggota Divisi PHBI",
  },
  {
    code: "24.01.034",
    name: "Muhamad Abdul fatah cahya Putrawan",
    gender: "Laki-Laki",
    status: "Aktif",
    divisi: "Anggota Divisi PHBI",
  },
  {
    code: "24.01.035",
    name: "Rayhan Satriawan",
    gender: "Laki-Laki",
    status: "Aktif",
    divisi: "Anggota Divisi PHBI",
  },
  {
    code: "24.01.036",
    name: "Rizkia Meliani Safitri",
    gender: "Perempuan",
    status: "Aktif",
    divisi: "Anggota Divisi Humas",
  },
  {
    code: "24.01.037",
    name: "Caskia Dwi Pratiwi",
    gender: "Perempuan",
    status: "Aktif",
    divisi: "Ketua Divisi PUBDEKDOK",
  },
  {
    code: "24.01.038",
    name: "Daffina febry hardiarti putri",
    gender: "Perempuan",
    status: "Aktif",
    divisi: "Anggota Divisi PUBDEKDOK",
  },
  {
    code: "24.01.039",
    name: "Sarah",
    gender: "Perempuan",
    status: "Aktif",
    divisi: "Anggota Divisi Keagamaan Dan Kemasjidan",
  },
  {
    code: "24.01.040",
    name: "Bhita Andini",
    gender: "Perempuan",
    status: "Aktif",
    divisi: "Anggota Divisi PUBDEKDOK",
  },
  {
    code: "24.01.041",
    name: "Wiji Astuti",
    gender: "Perempuan",
    status: "Aktif",
    divisi: "Anggota Divisi Pubdekdok",
  },
  {
    code: "24.01.042",
    name: "Putri Dwi Rahayu",
    gender: "Perempuan",
    status: "Aktif",
    divisi: "Anggota Divisi Keagamaan Dan Kemasjidan",
  },
  {
    code: "24.01.043",
    name: "Cyndi Kharisy Putri",
    gender: "Perempuan",
    status: "Aktif",
    divisi: "Anggota Divisi Kesekretariatan",
  },
  {
    code: "24.01.044",
    name: "Baats Jauhari",
    gender: "Laki-Laki",
    status: "Aktif",
    divisi: "Anggota Divisi Pubdekdok",
  },
  {
    code: "24.01.045",
    name: "Inayah Selfiana",
    gender: "Perempuan",
    status: "Aktif",
    divisi: "Anggota Divisi PHBI",
  },
  {
    code: "24.01.046",
    name: "Arya Agung Fadilah",
    gender: "Laki-Laki",
    status: "Aktif",
    divisi: "Anggota Divisi PHBI",
  },
  {
    code: "24.01.047",
    name: "Ikhwan Nur Fadilah",
    gender: "Laki-Laki",
    status: "Aktif",
    divisi: "Anggota Divisi",
  },
  {
    code: "24.01.048",
    name: "Rizky Arya Widani",
    gender: "Laki-Laki",
    status: "Aktif",
    divisi: "Anggota Divisi PHBI",
  },
  {
    code: "24.01.049",
    name: "Habib Maulana Azizi",
    gender: "Laki-Laki",
    status: "Aktif",
    divisi: "Anggota Divisi Kesekretariatan",
  },
  {
    code: "24.01.050",
    name: "Dewi Anggraeni",
    gender: "Perempuan",
    status: "Aktif",
    divisi: "Anggota Divisi PUBDEKDOK",
  },
  {
    code: "24.01.051",
    name: "Zahwa Andiyah Putri",
    gender: "Perempuan",
    status: "Aktif",
    divisi: "Angota Divisi PSDM",
  },
  {
    code: "24.01.052",
    name: "Annisa Ramadhani",
    gender: "Perempuan",
    status: "Aktif",
    divisi: "Anggota Divisi Humas",
  },
  {
    code: "24.01.053",
    name: "Aisyah Fitriyani",
    gender: "Perempuan",
    status: "Aktif",
    divisi: "Anggota Divisi PHBI",
  },
  {
    code: "24.01.054",
    name: "Aliend Nur Zahra",
    gender: "Perempuan",
    status: "Aktif",
    divisi: "Anggota Divisi PSDM",
  },
  {
    code: "24.01.055",
    name: "siti Aisyah",
    gender: "Perempuan",
    status: "Aktif",
    divisi: "Anggota Divisi PSDM",
  },
  {
    code: "24.01.056",
    name: "Dedi Juwanto",
    gender: "Laki-Laki",
    status: "Aktif",
    divisi: "Anggota Divisi Humas",
  },
  {
    code: "24.01.057",
    name: "Salwa Revtiani",
    gender: "Perempuan",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.058",
    name: "Tuti Apriyani",
    gender: "Perempuan",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.059",
    name: "Indana Zulfa",
    gender: "Perempuan",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.060",
    name: "Sariati Nurfadilah",
    gender: "Perempuan",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.061",
    name: "Rafa Reita",
    gender: "Perempuan",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.062",
    name: "Maryatul Qibtiyah",
    gender: "Perempuan",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.063",
    name: "Rayhan Nadi Agung Wijaya",
    gender: "Laki-Laki",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.064",
    name: "Dinar Hamzah Azzayat",
    gender: "Laki-Laki",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.065",
    name: "Sarinih",
    gender: "Perempuan",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.066",
    name: "Linda Permata",
    gender: "Perempuan",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.067",
    name: "Fathan Abid Hafizh",
    gender: "Laki-Laki",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.068",
    name: "Muhammad Rizky",
    gender: "Laki-Laki",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.069",
    name: "Mawar",
    gender: "Perempuan",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.070",
    name: "Nazwa Aulia Rahmania Ruhli Syahputri",
    gender: "Perempuan",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.071",
    name: "Izza Jazirah",
    gender: "Perempuan",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.072",
    name: "Gally Cahya Putrawan",
    gender: "Laki-Laki",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.073",
    name: "M Soni Arsadi",
    gender: "Laki-Laki",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.074",
    name: "Devita Agustin",
    gender: "Perempuan",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.075",
    name: "M Syuja Aqil",
    gender: "Laki-Laki",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.076",
    name: "Putri Nabila",
    gender: "Perempuan",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.077",
    name: "Farid Alita",
    gender: "Laki-Laki",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.078",
    name: "Gadis Apriyani",
    gender: "Perempuan",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.079",
    name: "Putri Nirmala",
    gender: "Perempuan",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.080",
    name: "M Arif Hidayat",
    gender: "Laki-Laki",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.081",
    name: "Yovanda Alfa Reza",
    gender: "Laki-Laki",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.082",
    name: "Siti Hajizah",
    gender: "Perempuan",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.083",
    name: "Abdurachman Iskandar",
    gender: "Laki-Laki",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.084",
    name: "Angga Brhamntyo",
    gender: "Laki-Laki",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.085",
    name: "Rifqi Maulana",
    gender: "Laki-Laki",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.086",
    name: "Rizky Hardiansyah",
    gender: "Laki-Laki",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.087",
    name: "Adi Wibowo",
    gender: "Laki-Laki",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.088",
    name: "Rafiq Wahid Alifudin",
    gender: "Laki-Laki",
    status: "Aktif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.089",
    name: "Muhammad Rizky",
    gender: "Laki-Laki",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
  {
    code: "24.01.090",
    name: "Sukran Alramadhana",
    gender: "Laki-Laki",
    status: "Pasif",
    divisi: "Anggota Pasif IRMANUFA",
  },
];

// ===== ELEMEN DOM =====
const elements = {
  input: document.getElementById("memberCode"),
  searchBtn: document.getElementById("searchBtn"),
  loading: document.getElementById("loadingAnimation"),
  resultCard: document.getElementById("resultCard"),
  memberCode: document.getElementById("memberCodeBadge"),
  memberName: document.getElementById("memberName"),
  divisiValue: document.getElementById("divisiValue"),
  predikatValue: document.getElementById("predikatValue"),
  genderValue: document.getElementById("genderValue"),
  statusText: document.getElementById("statusText"),
  statusBadge: document.getElementById("statusBadge"),
  signatureArea: document.getElementById("signatureArea"),
  footerStats: document.getElementById("footerStats"),
  toast: document.getElementById("toast"),
  toastMessage: document.getElementById("toastMessage"),
  memberAvatar: document.getElementById("memberAvatar"),
  statusDot: document.querySelector(".status-dot"),
};

// ===== UTILITY FUNCTIONS =====
function showToast(message, type = "info") {
  elements.toastMessage.textContent = message;
  elements.toast.classList.add("show");

  // Warna sesuai type
  if (type === "success") {
    elements.toast.style.background = "var(--success)";
  } else if (type === "error") {
    elements.toast.style.background = "var(--danger)";
  } else {
    elements.toast.style.background = "var(--primary)";
  }

  setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 3000);
}

function showLoading(show) {
  if (show) {
    elements.loading.classList.add("active");
    elements.resultCard.style.opacity = "0.5";
  } else {
    elements.loading.classList.remove("active");
    elements.resultCard.style.opacity = "1";
  }
}

function formatCode(input) {
  // Hapus semua spasi
  let cleaned = input.replace(/\s+/g, "");

  // Jika format sudah benar (xx.xx.xxx)
  if (/^\d{2}\.\d{2}\.\d{3}$/.test(cleaned)) {
    return cleaned;
  }

  // Coba perbaiki format jika hanya angka
  let digits = cleaned.replace(/\D/g, "");
  if (digits.length === 8) {
    return `${digits.substr(0, 2)}.${digits.substr(2, 2)}.${digits.substr(4, 3)}`;
  } else if (digits.length === 6) {
    return `24.01.${digits}`;
  } else if (digits.length === 3) {
    return `24.01.${digits}`;
  }

  return cleaned;
}

function updateStatusStyle(status) {
  const statusLower = status.toLowerCase();

  if (statusLower === "aktif") {
    elements.statusBadge.style.background =
      "linear-gradient(135deg, #d9f0e6, #b8e0d2)";
    elements.statusBadge.style.color = "#0b3b2f";
    elements.statusDot.style.background = "#2e7d5e";
    elements.statusDot.style.boxShadow = "0 0 10px #2e7d5e";
  } else if (statusLower === "pasif") {
    elements.statusBadge.style.background =
      "linear-gradient(135deg, #f3e8e0, #ecd7c9)";
    elements.statusBadge.style.color = "#7f5b4b";
    elements.statusDot.style.background = "#c75c5c";
    elements.statusDot.style.boxShadow = "0 0 10px #c75c5c";
  } else {
    elements.statusBadge.style.background = "#f0f4f8";
    elements.statusBadge.style.color = "#444";
    elements.statusDot.style.background = "#888";
  }
}

// ===== FUNGSI PENCARIAN UTAMA =====
function cariAnggota() {
  let rawCode = elements.input.value.trim();

  if (!rawCode) {
    showToast("Masukkan nomor anggota terlebih dahulu", "error");
    elements.input.focus();
    return;
  }

  // Format kode
  const formattedCode = formatCode(rawCode);

  // Tampilkan loading
  showLoading(true);

  // Simulasi proses (biar keliatan keren)
  setTimeout(() => {
    // Cari anggota
    const anggota = anggotaData.find((item) => item.code === formattedCode);

    if (!anggota) {
      // Tampilkan error
      elements.memberCode.textContent = "TIDAK DITEMUKAN";
      elements.memberName.textContent = "Nomor Tidak Valid";
      elements.divisiValue.textContent = "-";
      elements.predikatValue.textContent = "-";
      elements.genderValue.textContent = "-";
      elements.statusText.textContent = "Tidak Dikenal";

      // Avatar error
      elements.memberAvatar.innerHTML =
        '<i class="fas fa-exclamation-triangle" style="color: #c75c5c;"></i>';

      updateStatusStyle("unknown");

      // Sembunyikan signature dan footer stats
      elements.signatureArea.style.display = "none";
      elements.footerStats.innerHTML =
        '<i class="fas fa-exclamation-circle"></i> <span>Nomor tidak ditemukan dalam database</span>';

      showToast(`Nomor ${formattedCode} tidak ditemukan`, "error");
      showLoading(false);
      return;
    }

    // Tampilkan data anggota
    elements.memberCode.textContent = anggota.code;
    elements.memberName.textContent = anggota.name;
    elements.divisiValue.textContent = anggota.divisi;
    elements.predikatValue.textContent = anggota.status;
    elements.genderValue.textContent = anggota.gender;
    elements.statusText.textContent = anggota.status;

    // Update avatar berdasarkan gender
    if (anggota.gender.toLowerCase().includes("perempuan")) {
      elements.memberAvatar.innerHTML =
        '<i class="fas fa-female" style="color: #d98c5f;"></i>';
    } else {
      elements.memberAvatar.innerHTML =
        '<i class="fas fa-male" style="color: #0b3b2f;"></i>';
    }

    // Update status style
    updateStatusStyle(anggota.status);

    // Tampilkan signature dan footer
    elements.signatureArea.style.display = "block";

    // Hitung statistik
    const aktifCount = anggotaData.filter(
      (a) => a.status.toLowerCase() === "aktif",
    ).length;
    const pasifCount = anggotaData.filter(
      (a) => a.status.toLowerCase() === "pasif",
    ).length;

    elements.footerStats.innerHTML = `
            <i class="fas fa-chart-line"></i>
            <span>Total anggota: <strong>90</strong> · Aktif: ${aktifCount} · Pasif: ${pasifCount}</span>
        `;

    // Animasi sukses
    elements.resultCard.classList.add("animate__animated", "animate__pulse");
    setTimeout(() => {
      elements.resultCard.classList.remove(
        "animate__animated",
        "animate__pulse",
      );
    }, 500);

    showToast(`Selamat datang, ${anggota.name}!`, "success");
    showLoading(false);
  }, 800); // Delay 800ms untuk efek loading
}

// ===== EVENT LISTENERS =====
elements.searchBtn.addEventListener("click", cariAnggota);

elements.input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    cariAnggota();
  }
});

// Auto-format saat mengetik
elements.input.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "");
  if (value.length > 8) value = value.substr(0, 8);

  // Format otomatis xx.xx.xxx
  if (value.length > 4) {
    e.target.value = `${value.substr(0, 2)}.${value.substr(2, 2)}.${value.substr(4)}`;
  } else if (value.length > 2) {
    e.target.value = `${value.substr(0, 2)}.${value.substr(2)}`;
  } else {
    e.target.value = value;
  }
});

// Quick access chips
document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    const code = chip.getAttribute("data-code");
    elements.input.value = code;
    cariAnggota();
  });
});

// ===== CREATE PARTICLES BACKGROUND =====
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  const particleCount = 30;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    // Random position
    const size = Math.random() * 10 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    // Random animation delay
    particle.style.animationDelay = `${Math.random() * 10}s`;
    particle.style.animationDuration = `${Math.random() * 10 + 10}s`;

    // Random opacity
    particle.style.background = `rgba(228, 197, 128, ${Math.random() * 0.3})`;

    particlesContainer.appendChild(particle);
  }
}

// ===== INITIALIZATION =====
window.addEventListener("load", () => {
  // Buat particles
  createParticles();

  // Set default stats
  const aktifCount = anggotaData.filter(
    (a) => a.status.toLowerCase() === "aktif",
  ).length;
  const pasifCount = anggotaData.filter(
    (a) => a.status.toLowerCase() === "pasif",
  ).length;

  elements.footerStats.innerHTML = `
        <i class="fas fa-chart-line"></i>
        <span>Total anggota: <strong>90</strong> · Aktif: ${aktifCount} · Pasif: ${pasifCount}</span>
    `;

  // Welcome toast
  setTimeout(() => {
    showToast("🌟 Selamat datang di IRMANUFA Premium System", "info");
  }, 500);

  // Auto-focus input
  elements.input.focus();
});

// ===== KEYBOARD SHORTCUT =====
document.addEventListener("keydown", (e) => {
  // Ctrl + K untuk fokus ke search
  if (e.ctrlKey && e.key === "k") {
    e.preventDefault();
    elements.input.focus();
    showToast("🔍 Masukkan nomor anggota", "info");
  }

  // Escape untuk clear
  if (e.key === "Escape") {
    elements.input.value = "";
    elements.input.focus();
  }
});

// ===== EXPORT (opsional, untuk debugging) =====
console.log("✅ IRMANUFA Premium System loaded!");
console.log(`📊 Total anggota: 90 (Aktif: 56, Pasif: 34)`);
