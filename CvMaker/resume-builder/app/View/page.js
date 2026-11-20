"use client";

import { useState, useEffect } from "react";
import ResumeForm from "../_components/ResumeForm";
import dynamic from "next/dynamic";
import TemplateClassic from "../_components/TemplateClassic";
import TemplateModern from "../_components/TemplateModern";
import TemplateMinimal from "../_components/TemplateMinimal";
import TemplateCreative from "../_components/TemplateCreative";
const html2pdf = dynamic(() => import("html2pdf.js"), { ssr: false });
const initialResume = {
    name: "",
    email: "",
    phone: "",
    summary: "",
    photo: "", // <-- Profil fotoğrafı için eklendi
    experience: [{ position: "", company: "", date: "", description: "" }],
    education: [{ school: "", department: "", date: "" }],
    skills: "",
    themeColor: "#1e293b",
};

export default function Home() {

    const [resume, setResume] = useState(initialResume);
    const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
    function handleReset() {
        if (confirm("Tüm verileri silmek istediğinize emin misiniz?")) {
            setResume(initialResume);
            localStorage.removeItem("resumeData");
        }
    }
    useEffect(() => {
        const saved = localStorage.getItem("resumeData");
        if (saved) {
            try {
                setResume(JSON.parse(saved));
            } catch (e) {
                console.error("Kayıtlı veri okunamadı", e);
            }
        }
    }, []); // <-- Dizi boş olmalı, bu sayede sadece ilk açılışta çalışır

    // 2. Resume verisi her değiştiğinde çalışır
    useEffect(() => {
        // Eğer resume boşsa ve hafızada veri varsa, üzerine yazma
        if (resume !== initialResume) {
            localStorage.setItem("resumeData", JSON.stringify(resume));
        }
    }, [resume]);
    const [template, setTemplate] = useState("classic");

    function handleChange(e) {
        setResume({ ...resume, [e.target.name]: e.target.value });
    }
    function handleExperienceChange(index, field, value) {
        const updated = [...resume.experience];
        updated[index] = { ...updated[index], [field]: value };
        setResume({ ...resume, experience: updated });
    }

    function addExperience() {
        setResume({
            ...resume,
            experience: [
                ...resume.experience,
                { position: "", company: "", date: "", description: "" },
            ],
        });
    }

    function removeExperience(index) {
        setResume({
            ...resume,
            experience: resume.experience.filter((_, i) => i !== index),
        });
    }

    function handleEducationChange(index, field, value) {
        const updated = [...resume.education];
        updated[index] = { ...updated[index], [field]: value };
        setResume({ ...resume, education: updated });
    }

    function addEducation() {
        setResume({
            ...resume,
            education: [
                ...resume.education,
                { school: "", department: "", date: "" },
            ],
        });
    }

    function removeEducation(index) {
        setResume({
            ...resume,
            education: resume.education.filter((_, i) => i !== index),
        });
    }
    function handlePhotoUpload(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setResume({ ...resume, photo: reader.result });
            };
            reader.readAsDataURL(file);
        }
    }
    async function handleDownload() {
        const element = document.getElementById("resume-content");
        if (!element) return;

        setIsGeneratingPDF(true); // Yüklemeyi başlat

        try {
            const html2pdfModule = await import("html2pdf.js");
            const html2pdf = html2pdfModule.default || html2pdfModule;

            const opt = {
                margin: 0,
                filename: `${resume.name || "ozgecmis"}.pdf`,
                image: { type: "jpeg", quality: 1 },
                html2canvas: {
                    scale: 2,
                    useCORS: true,
                    letterRendering: true,
                    scrollY: 0
                },
                jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
            };

            await html2pdf().set(opt).from(element).save();
        } catch (error) {
            console.error("PDF oluşturulurken hata oluştu:", error);
            alert("PDF oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.");
        } finally {
            setIsGeneratingPDF(false); // İşlem bittiğinde yüklemeyi durdur (Hata olsa bile)
        }
    }
    return (
        <main className="min-h-screen bg-gray-100 p-6">
            <div >asdfdsasdfdsafasdsdfasfdfddddddddddddddddddddddddd</div>
            {/* PDF YÜKLEME EKRANI (MODAL) */}
            {isGeneratingPDF && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity">
                    <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col items-center max-w-sm w-full mx-4">
                        {/* Dönen Yükleme İkonu (Spinner) */}
                        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-6"></div>

                        <h3 className="text-xl font-bold text-gray-800 mb-2">PDF Hazırlanıyor</h3>
                        <p className="text-gray-500 text-center text-sm">
                            Lütfen bekleyin, özgeçmişiniz en yüksek kalitede oluşturuluyor...
                        </p>
                    </div>
                </div>
            )}
            <div className="max-w-6xl mx-auto">
                {/* Üst çubuk: başlık + PDF butonu */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Özgeçmiş Oluşturucu
                    </h1>
                    <button
                        onClick={handleReset}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition ml-2"
                    >
                        Formu Temizle
                    </button>
                    <button
                        onClick={handleDownload}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                        PDF İndir
                    </button>

                </div>

                {/* Ana içerik: form + önizleme */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <ResumeForm
                        resume={resume}
                        onChange={handleChange}
                        onPhotoUpload={handlePhotoUpload}
                        onExperienceChange={handleExperienceChange}
                        onAddExperience={addExperience}
                        onRemoveExperience={removeExperience}
                        onEducationChange={handleEducationChange}
                        onAddEducation={addEducation}
                        onRemoveEducation={removeEducation}
                    />
                    <div>
                        {/* Şablon seçici */}
                        <div className="mb-4 flex flex-wrap items-center gap-4 bg-gray-50 p-3 rounded-lg border border-gray-200">

                            {/* Şablon Seçici */}
                            <div className="flex items-center gap-2">
                                <label className="text-sm font-medium text-gray-700">Şablon:</label>
                                <select
                                    value={template}
                                    onChange={(e) => setTemplate(e.target.value)}
                                    className="border border-gray-300 rounded p-2 text-sm text-gray-950 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                                >
                                    <option value="classic">Klasik</option>
                                    <option value="modern">Modern</option>
                                    <option value="minimal">Minimalist</option>
                                    <option value="creative">Yaratıcı</option>
                                </select>
                            </div>

                            {/* Renk Seçici */}
                            <div className="flex items-center gap-2">
                                <label className="text-sm font-medium text-gray-700">Tema Rengi:</label>
                                <input
                                    type="color"
                                    value={resume.themeColor}
                                    onChange={(e) => setResume({ ...resume, themeColor: e.target.value })}
                                    className="w-8 h-8 p-0 border-0 rounded cursor-pointer"
                                    title="Renk Seç"
                                />
                                {/* Seçilen rengin kodunu göstermek isterseniz: */}
                                {/* <span className="text-xs text-gray-500">{resume.themeColor}</span> */}
                            </div>

                        </div>

                        {template === "classic" && <TemplateClassic resume={resume} />}
                        {template === "modern" && <TemplateModern resume={resume} />}
                        {template === "minimal" && <TemplateMinimal resume={resume} />}
                        {template === "creative" && <TemplateCreative resume={resume} />}
                    </div>
                </div>
            </div>
        </main>
    );
}