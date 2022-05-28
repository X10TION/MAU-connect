const socket = io()
const key = document.getElementById("KEY")
const localvideo1 = document.getElementById("localvideo")
const call = document.getElementById("call")
const stop = document.getElementById("stop")
const Mute = document.getElementById("Mute")
const Unmute = document.getElementById("Unmute")
const End = document.getElementById("End")
let tracks = []
const configuration = {iceServers:[{urls:'stun:stun.l.google.com:19302'}]}
let peer = new RTCPeerConnection(configuration)

socket.on('connect', () => {
    localStorage.setItem("private", socket.id)
    key.value = socket.id
    console.log(socket.id)
})
// get local media devices
const openMediaDevice = async() =>{
    try{
        let stream = await navigator.mediaDevices.getUserMedia({video:true,audio:true})
        localvideo1.srcObject = stream
        tracks = stream.getTracks()
    } catch(error){
        console.log(error)
    }
}

const createOffer = async() => {
    try{
        let stream = await openMediaDevice()
        stream.getTracks.forEach(track => peer.addTrack(track))
        let offer = await peer.createOffer()
        peer.setLocalDescription(new RTCSessionDescription(offer))
    }catch(error)
    {
         console.log(error)
    }
}


// START FUNCTION
call.addEventListener('click',() =>{
    openMediaDevice()
    Mute.addEventListener('click',muteTrack)
    End.addEventListener('click', stopTrack)

})

// // using mediaDevice
// navigator.mediaDevices.getUserMedia({video:true,audio:true})
// .then(stream => {
//     console.log("stream2", stream)
//     let tracks = stream.getTracks()
//  tracks.forEach(track => stream1.addTrack(track))
    
// })

// mute tack

const muteTrack = () => {
    tracks.forEach(track => track.enabled = false)
     Unmute.addEventListener('click',unMuteTracks)
}
// unmute tracks
const unMuteTracks = () => {
    tracks.forEach( track => track.enabled = true)
}
//  stop lecture
const stopTrack = () => {
    tracks.forEach(track => track.stop())
}