"use client";

import { useState } from "react";

export default function ResumeForm({
    resume,
    onChange,
    onPhotoUpload,
    onExperienceChange,
    onAddExperience,
    onRemoveExperience,
    onEducationChange,
    onAddEducation,
    onRemoveEducation,
}) {
    // Hangi panelin açık olduğunu tutan state (Varsayılan olarak Kişisel Bilgiler açık)
    const [openSection, setOpenSection] = useState("personal");

    // Panelleri açıp kapatmaya yarayan fonksiyon
    const toggleSection = (section) => {
        setOpenSection(openSection === section ? "" : section);
    };

    // Akordiyon Başlığı Bileşeni (Tekrar yazmamak için)
    const SectionHeader = ({ title, id }) => (
        <button
            type="button"
            onClick={() => toggleSection(id)}
            className="w-full flex justify-between items-center bg-gray-50 hover:bg-gray-100 p-4 rounded-lg border border-gray-200 transition-colors mb-2"
        >
            <span className="font-semibold text-gray-800">{title}</span>
            <span className="text-gray-500 font-bold">{openSection === id ? "−" : "+"}</span>
        </button>
    );

    return (
        <div className="bg-white p-6 rounded-lg shadow space-y-2 h-fit">
            <h2 className="text-xl font-bold text-gray-800 mb-4">CV Bilgileriniz</h2>

            {/* 1. KİŞİSEL BİLGİLER VE FOTOĞRAF */}
            <div>
                <SectionHeader title="Kişisel Bilgiler & Fotoğraf" id="personal" />
                {openSection === "personal" && (
                    <div className="p-4 border border-t-0 border-gray-200 rounded-b-lg space-y-4 mb-4 bg-white">
                        {/* Fotoğraf Yükleme */}
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden flex-shrink-0 border border-gray-300">
                                {resume.photo ? (
                                    <img src={resume.photo} alt="Profil" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs text-center p-1">Fotoğraf Yok</div>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Profil Fotoğrafı</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={onPhotoUpload}
                                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
                            <input name="name" value={resume.name} onChange={onChange} placeholder="Örn: Ayşe Yılmaz" className="w-full border border-gray-300 p-2 rounded text-gray-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
                            <input name="email" value={resume.email} onChange={onChange} placeholder="ornek@mail.com" className="w-full border border-gray-300 p-2 rounded text-gray-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                            <input name="phone" value={resume.phone} onChange={onChange} placeholder="05xx xxx xx xx" className="w-full border border-gray-300 p-2 rounded text-gray-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Hakkımda</label>
                            <textarea name="summary" value={resume.summary} onChange={onChange} placeholder="Kendinizden kısaca bahsedin..." rows={3} className="w-full border border-gray-300 p-2 rounded text-gray-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </div>
                )}
            </div>

            {/* 2. DENEYİM */}
            <div>
                <SectionHeader title="İş Deneyimi" id="experience" />
                {openSection === "experience" && (
                    <div className="p-4 border border-t-0 border-gray-200 rounded-b-lg space-y-4 mb-4 bg-white">
                        {resume.experience.map((exp, index) => (
                            <div key={index} className="border border-gray-200 rounded p-3 space-y-2 bg-gray-50 relative">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-semibold text-gray-700">Deneyim {index + 1}</span>
                                    {resume.experience.length > 1 && (
                                        <button type="button" onClick={() => onRemoveExperience(index)} className="text-xs text-red-500 hover:text-red-700 font-medium">Sil</button>
                                    )}
                                </div>
                                <input value={exp.position} onChange={(e) => onExperienceChange(index, "position", e.target.value)} placeholder="Pozisyon" className="w-full border border-gray-300 p-2 rounded text-sm text-gray-950" />
                                <input value={exp.company} onChange={(e) => onExperienceChange(index, "company", e.target.value)} placeholder="Şirket" className="w-full border border-gray-300 p-2 rounded text-sm text-gray-950" />
                                <input value={exp.date} onChange={(e) => onExperienceChange(index, "date", e.target.value)} placeholder="Tarih (Örn: 2020 - 2023)" className="w-full border border-gray-300 p-2 rounded text-sm text-gray-950" />
                                <textarea value={exp.description} onChange={(e) => onExperienceChange(index, "description", e.target.value)} placeholder="Açıklama" rows={2} className="w-full border border-gray-300 p-2 rounded text-sm text-gray-950" />
                            </div>
                        ))}
                        <button type="button" onClick={onAddExperience} className="w-full py-2 bg-blue-50 text-blue-600 font-medium rounded hover:bg-blue-100 transition">+ Yeni Deneyim Ekle</button>
                    </div>
                )}
            </div>

            {/* 3. EĞİTİM */}
            <div>
                <SectionHeader title="Eğitim Bilgileri" id="education" />
                {openSection === "education" && (
                    <div className="p-4 border border-t-0 border-gray-200 rounded-b-lg space-y-4 mb-4 bg-white">
                        {resume.education.map((edu, index) => (
                            <div key={index} className="border border-gray-200 rounded p-3 space-y-2 bg-gray-50 relative">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-semibold text-gray-700">Eğitim {index + 1}</span>
                                    {resume.education.length > 1 && (
                                        <button type="button" onClick={() => onRemoveEducation(index)} className="text-xs text-red-500 hover:text-red-700 font-medium">Sil</button>
                                    )}
                                </div>
                                <input value={edu.school} onChange={(e) => onEducationChange(index, "school", e.target.value)} placeholder="Okul" className="w-full border border-gray-300 p-2 rounded text-sm text-gray-950" />
                                <input value={edu.department} onChange={(e) => onEducationChange(index, "department", e.target.value)} placeholder="Bölüm" className="w-full border border-gray-300 p-2 rounded text-sm text-gray-950" />
                                <input value={edu.date} onChange={(e) => onEducationChange(index, "date", e.target.value)} placeholder="Tarih (Örn: 2016 - 2020)" className="w-full border border-gray-300 p-2 rounded text-sm text-gray-950" />
                            </div>
                        ))}
                        <button type="button" onClick={onAddEducation} className="w-full py-2 bg-blue-50 text-blue-600 font-medium rounded hover:bg-blue-100 transition">+ Yeni Eğitim Ekle</button>
                    </div>
                )}
            </div>

            {/* 4. YETENEKLER */}
            <div>
                <SectionHeader title="Yetenekler" id="skills" />
                {openSection === "skills" && (
                    <div className="p-4 border border-t-0 border-gray-200 rounded-b-lg space-y-4 mb-4 bg-white">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Yetenekleriniz</label>
                            <input name="skills" value={resume.skills} onChange={onChange} placeholder="Örn: JavaScript, React, SQL" className="w-full border border-gray-300 p-2 rounded text-gray-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}