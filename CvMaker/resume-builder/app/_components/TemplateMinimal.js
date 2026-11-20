export default function TemplateMinimal({ resume }) {
    return (
        <div id="resume-content" className="bg-white p-10 min-h-[600px] font-sans text-black">

            {/* Başlık Alanı */}
            <div className="text-center pb-6 mb-6 border-b-2" style={{ borderColor: resume.themeColor || "#000000" }}>
                {resume.photo && (
                    <img
                        src={resume.photo}
                        alt="Profil"
                        className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-gray-300"
                    />
                )}
                <h1 className="text-4xl font-light tracking-widest uppercase mb-2" style={{ color: resume.themeColor || "#000000" }}>
                    {resume.name || "Ad Soyad"}
                </h1>
                <div className="text-sm tracking-wide space-x-2 text-gray-600">
                    {resume.email && <span>{resume.email}</span>}
                    {resume.email && resume.phone && <span>|</span>}
                    {resume.phone && <span>{resume.phone}</span>}
                </div>
            </div>

            {/* Hakkımda */}
            {resume.summary && (
                <section className="mb-6 text-center italic text-gray-700 text-sm px-10">
                    "{resume.summary}"
                </section>
            )}

            {/* Deneyim */}
            <section className="mb-6">
                <h2 className="text-sm font-bold uppercase tracking-widest pb-1 mb-3 border-b" style={{ borderColor: resume.themeColor || "#d1d5db", color: resume.themeColor || "#000000" }}>
                    Deneyim
                </h2>
                <div className="space-y-4">
                    {resume.experience.map((exp, i) => (
                        <div key={i}>
                            <div className="flex justify-between items-baseline">
                                <h3 className="font-semibold text-base">{exp.position || "Pozisyon"}</h3>
                                <span className="text-xs text-gray-500 font-mono">{exp.date}</span>
                            </div>
                            <div className="text-sm text-gray-600 mb-1">{exp.company || "Şirket"}</div>
                            {exp.description && (
                                <p className="text-sm text-gray-700 whitespace-pre-wrap">{exp.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Eğitim */}
            <section className="mb-6">
                <h2 className="text-sm font-bold uppercase tracking-widest pb-1 mb-3 border-b" style={{ borderColor: resume.themeColor || "#d1d5db", color: resume.themeColor || "#000000" }}>
                    Eğitim
                </h2>
                <div className="space-y-3">
                    {resume.education.map((edu, i) => (
                        <div key={i} className="flex justify-between items-baseline">
                            <div>
                                <h3 className="font-semibold text-base">{edu.school || "Okul"}</h3>
                                <div className="text-sm text-gray-600">{edu.department || "Bölüm"}</div>
                            </div>
                            <span className="text-xs text-gray-500 font-mono">{edu.date}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Yetenekler */}
            {resume.skills && (
                <section>
                    <h2 className="text-sm font-bold uppercase tracking-widest pb-1 mb-3 border-b" style={{ borderColor: resume.themeColor || "#d1d5db", color: resume.themeColor || "#000000" }}>
                        Yetenekler
                    </h2>
                    <p className="text-sm text-gray-700">{resume.skills}</p>
                </section>
            )}
        </div>
    );
}