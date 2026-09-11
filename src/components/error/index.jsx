import React from 'react'

const Error = ({ info }) => {
    return (
        <div className="my-10 flex min-h-32 flex-col items-center justify-center gap-2 text-center text-red-400">
            <strong>Bir hata oluştu.</strong>
            <span>{info || 'İçerik yüklenemedi. Lütfen daha sonra tekrar deneyin.'}</span>
        </div>
    )
}

export default Error