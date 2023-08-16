import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

function AlbumsListItem({album}){
    const [removeAlbum, results] = useRemoveAlbumMutation();
    const handleremoveAlbum = ()=>{
        removeAlbum(album);
    }
    const header = <><Button className="mr-2" loading= {results.isLoading} onClick={handleremoveAlbum}><GoTrashcan></GoTrashcan></Button>{album.title}</>
    return <ExpandablePanel key={album.id} header={header}>
        <PhotosList album={album}></PhotosList>
    </ExpandablePanel>
}

export default AlbumsListItem;