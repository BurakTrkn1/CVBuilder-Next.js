export default function TemplateCreative({ resume }) {
    return (
        <div id="resume-content" className="bg-white min-h-[600px] flex flex-col shadow overflow-hidden">

            {/* ÜST RENKLİ ALAN */}
            <div
                className="w-full p-8 text-white relative flex items-center gap-6"
                style={{ backgroundColor: resume.themeColor || "#1e293b" }}
            >
                {/* Arka plan süslemesi (opsiyonel şık bir detay) */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-1/2 w-16 h-16 bg-white opacity-10 rounded-tr-full"></div>

                {resume.photo && (
                    <div className="w-28 h-28 flex-shrink-0 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
                        <img
                            src={resume.photo}
                            alt="Profil"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                )}

                <div className="relative z-10">
                    <h1 className="text-4xl font-extrabold tracking-tight mb-2">
                        {resume.name || "Ad Soyad"}
                    </h1>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium text-white/90">
                        {resume.email && <span>✉ {resume.email}</span>}
                        {resume.phone && <span>📞 {resume.phone}</span>}
                    </div>
                </div>
            </div>

            {/* ALT İÇERİK ALANI */}
            <div className="p-8 flex-grow">
                {/* Hakkımda */}
                {resume.summary && (
                    <section className="mb-6">
                        <h2 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: resume.themeColor || "#1e293b" }}></span>
                            Hakkımda
                        </h2>
                        <p className="text-gray-700 text-sm whitespace-pre-wrap pl-4 border-l-2" style={{ borderColor: resume.themeColor || "#1e293b" }}>
                            {resume.summary}
                        </p>
                    </section>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Sol Taraf: Deneyim */}
                    <section>
                        <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: resume.themeColor || "#1e293b" }}></span>
                            İş Deneyimi
                        </h2>
                        <div className="space-y-4">
                            {resume.experience.map((exp, i) => (
                                <div key={i} className="relative pl-4 border-l border-gray-200">
                                    <div className="absolute w-2 h-2 bg-gray-300 rounded-full -left-[4.5px] top-1.5"></div>
                                    <h3 className="font-bold text-gray-900 text-sm">{exp.position || "Pozisyon"}</h3>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <span className="text-sm font-medium" style={{ color: resume.themeColor || "#1e293b" }}>{exp.company || "Şirket"}</span>
                                        <span className="text-xs text-gray-500 font-medium">{exp.date}</span>
                                    </div>
                                    {exp.description && (
                                        <p className="text-xs text-gray-600 whitespace-pre-wrap mt-1">{exp.description}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Sağ Taraf: Eğitim ve Yetenekler */}
                    <section>
                        <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: resume.themeColor || "#1e293b" }}></span>
                            Eğitim
                        </h2>
                        <div className="space-y-3 mb-6">
                            {resume.education.map((edu, i) => (
                                <div key={i}>
                                    <h3 className="font-bold text-gray-900 text-sm">{edu.school || "Okul"}</h3>
                                    <div className="flex justify-between items-baseline">
                                        <span className="text-sm text-gray-700">{edu.department || "Bölüm"}</span>
                                        <span className="text-xs text-gray-500 font-medium">{edu.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {resume.skills && (
                            <>
                                <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: resume.themeColor || "#1e293b" }}></span>
                                    Yetenekler
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {resume.skills.split(',').map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 text-xs font-semibold rounded-full text-white shadow-sm"
                                            style={{ backgroundColor: resume.themeColor || "#1e293b" }}
                                        >
                                            {skill.trim()}
                                        </span>
                                    ))}
                                </div>
                            </>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
}