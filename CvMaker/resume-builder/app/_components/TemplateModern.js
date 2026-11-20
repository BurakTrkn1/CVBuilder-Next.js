export default function TemplateModern({ resume }) {
    return (
        <div id="resume-content" className="bg-white shadow min-h-[600px] h-[1000px] flex items-stretch overflow-hidden">

            {/* SOL SÜTUN (Lacivert Alan) */}
            <div
                className="w-1/3 text-white p-6 flex flex-col items-center"
                style={{ backgroundColor: resume.themeColor || "#1e293b" }}
            >
                {/* FOTOĞRAF */}
                {resume.photo && (
                    <div className="w-full flex justify-center mb-6">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-600 shadow-xl bg-gray-200">
                            <img
                                src={resume.photo}
                                alt="Profil"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>
                )}

                {/* İSİM VE İLETİŞİM BİLGİLERİ */}
                <div className="w-full text-center">
                    <h1 className="text-2xl font-bold mb-1">{resume.name || "Ad Soyad"}</h1>
                    <div className="text-sm text-slate-300 space-y-1 mb-6">
                        {resume.email && <p>{resume.email}</p>}
                        {resume.phone && <p>{resume.phone}</p>}
                    </div>

                    {/* YETENEKLER */}
                    {resume.skills && (
                        <div>
                            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400 mb-2">
                                Yetenekler
                            </h2>
                            <p className="text-sm text-slate-200 whitespace-pre-wrap break-words w-full">
                                {resume.skills}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* SAĞ SÜTUN (Beyaz Alan) */}
            <div className="w-2/3 p-6 bg-white flex flex-col">
                {resume.summary && (
                    <section className="mb-5">
                        <h2 className="text-lg font-semibold text-slate-800 mb-1 border-b pb-1">
                            Hakkımda
                        </h2>
                        <p className="text-gray-700 whitespace-pre-wrap text-sm">{resume.summary}</p>
                    </section>
                )}

                <section className="mb-5">
                    <h2 className="text-lg font-semibold text-slate-800 mb-1 border-b pb-1">
                        Deneyim
                    </h2>
                    {resume.experience.map((exp, i) => (
                        <div key={i} className="mb-3">
                            <p className="font-medium text-slate-900 text-sm">
                                {exp.position || "Pozisyon"} — {exp.company || "Şirket"}
                            </p>
                            <p className="text-xs text-gray-500">{exp.date}</p>
                            {exp.description && (
                                <p className="text-gray-700 whitespace-pre-wrap text-sm mt-1">
                                    {exp.description}
                                </p>
                            )}
                        </div>
                    ))}
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-slate-800 mb-1 border-b pb-1">
                        Eğitim
                    </h2>
                    {resume.education.map((edu, i) => (
                        <div key={i} className="mb-2">
                            <p className="font-medium text-slate-900 text-sm">
                                {edu.school || "Okul"} — {edu.department || "Bölüm"}
                            </p>
                            <p className="text-xs text-gray-500">{edu.date}</p>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}