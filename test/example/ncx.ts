import EPub from '../../index';

let epubFile: string;

epubFile = "Long Feng Zhi Zu - Si Yuan rururu.epub";
//epubFile = '2d921902.epub';

EPub.createAsync(epubFile, null, '')
	.then(async function (epub)
	{
		console.log(epub.filename);

		console.log("METADATA:\n");
		console.log(epub.metadata);

//		console.log("\nSPINE:\n");
//		console.log(epub.flow);
//
//		console.log("\nTOC:\n");
//		console.log(epub.toc);

		console.log("\nNCX:\n");
		console.log(epub.ncx);

		console.log(epub.ncx_depth);

	})
	.catch(function (err)
	{
		console.log("ERROR\n-----");
		throw err;
	})
;


