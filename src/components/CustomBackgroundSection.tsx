
export default function CustomBackgroundSection({image, transparency, children} : {image: string, transparency: number, children: React.ReactNode}) {
    return (
        <div
            style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            
            
            height:'60vh',
            backgroundRepeat: 'no-repeat',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            }}
        >
            <div 
                style={{
                    backgroundColor: `rgb(255, 255,255, ${transparency})`,
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
                }}
            >
                {children}
            </div>
            
        </div>
    )
}