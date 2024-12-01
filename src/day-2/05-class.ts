// type Movie = {
//     releaseYear: number;
//     // play(): void;
//     play: () => void;
// }

// class Film implements Movie {
//     // title: string | undefined;
//     // duration?: number;

//     // title: string;
//     // duration: number;

//     // constructor(title: string, duration: number) {
//     //     this.title = title;
//     //     this.duration = duration;
//     // }

//     constructor(public readonly title: string, readonly duration: number) {
//         this.title
//     }

//     releaseYear: number = 0;

//     play(): void {
//         throw new Error("Method not implemented.");
//     }

//     // play = () => {}
// }

// function play(movie: Movie) {
//     movie.play();
// }

// class NewFilm extends Film {
//     constructor(title: string, duration: number) {
//         super(title, duration);

//         this.title
//     }
// }

// const film = new Film('', 123);

// film.title

// ---------------------abstract---------------------

// abstract class MyNode {
//     abstract scale: number;

//     x = 0;
//     y = 0;

//     abstract paint(options?: {}): void;

//     calculateSize() {
//         return this.x * this.y;
//     }
// }

// class StorageNode extends MyNode {
//     scale = 1;

//     paint(options: {}): void {
//         throw new Error("Method not implemented.");
//     }

// }

// class FabricNode extends MyNode {
//     scale = 1;

//     paint(options: {}): void {
//         throw new Error("Method not implemented.");
//     }

// }

// class CarNode extends MyNode {
//     scale = 1;

//     paint(options: {}): void {
//         throw new Error("Method not implemented.");
//     }

// }

// function paint(nodes: MyNode[]) {
//     nodes.forEach(node => {
//         node.paint();
//     })
// }

// paint([new StorageNode(), new FabricNode()]);
