export default function ResumePreview({ resume }) {
    return (
        <div id="resume-preview" className="bg-white p-8 rounded-lg shadow min-h-[600px]">
            {/* Başlık */}
            <div className="border-b pb-4 mb-4">
                <h1 className="text-3xl font-bold text-gray-900">
                    {resume.name || "Ad Soyad"}
                </h1>
                <p className="text-gray-600 mt-1">
                    {resume.email || "E-posta"} {resume.phone && `• ${resume.phone}`}
                </p>
            </div>

            {/* Hakkımda */}
            {resume.summary && (
                <section className="mb-4">
                    <h2 className="text-lg font-semibold text-gray-800 mb-1">Hakkımda</h2>
                    <p className="text-gray-700 whitespace-pre-wrap">{resume.summary}</p>
                </section>
            )}

            {/* Deneyim */}
            <section className="mb-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Deneyim</h2>
                {resume.experience.map((exp, index) => (
                    <div key={index} className="mb-3">
                        <p className="font-medium text-gray-900">
                            {exp.position || "Pozisyon"} — {exp.company || "Şirket"}
                        </p>
                        <p className="text-sm text-gray-500">{exp.date}</p>
                        {exp.description && (
                            <p className="text-gray-700 whitespace-pre-wrap mt-1">{exp.description}</p>
                        )}
                    </div>
                ))}
            </section>

            <section className="mb-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Eğitim</h2>
                {resume.education.map((edu, index) => (
                    <div key={index} className="mb-3">
                        <p className="font-medium text-gray-900">
                            {edu.school || "Okul"} — {edu.department || "Bölüm"}
                        </p>
                        <p className="text-sm text-gray-500">{edu.date}</p>
                    </div>
                ))}
            </section>

            {/* Yetenekler */}
            {resume.skills && (
                <section>
                    <h2 className="text-lg font-semibold text-gray-800 mb-1">Yetenekler</h2>
                    <p className="text-gray-700">{resume.skills}</p>
                </section>
            )}
        </div>
    );
}