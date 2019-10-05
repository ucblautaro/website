
		//Esta función crea los elementos LI de la etiqueta <UL> que está vacía
		function newLi(Texth3,description,srcImg){
			var ul = document.getElementById("lista")
			var li = document.createElement("li")
			var h3 = document.createElement("h3")
			var p = document.createElement("p")
			var img = document.createElement("img")

			var url = "refresh("+"'"+description+"'"+")"

			//li.appendChild(p)

			p.textContent = description
			h3.textContent = Texth3
			li.appendChild(h3)
			
			img.setAttribute("class","videoImg col-md-5")
			img.setAttribute("src",srcImg)
			h3.setAttribute("class","selected col-md-8")
			li.appendChild(img)
			li.setAttribute("onclick",url)
			ul.appendChild(li)

		}

		function getData(){
			var selected = document.getElementById("lista2").value
			if(selected=="Profetas menores"){
				aYoutube = ["r2RdzuNN4kA", "ylnkjEs0Npg", "MTUYYiwzbis", "OV-Vfaxw_JY", "adHnsl3bejg", "lhG8scDMdD0", "ARJGar0k-Eo", "U6hb_kytKPk", "sEmuTPxUgh4", "fWp4S1AlKoQ", "jPZ1IBDCmbo", "5c0Lk9JoQlc", "IRq3qQQ7QoU", "LJpJXFM0aGk", "yd6HdNwpEww", "_lusJYBTTmY", "TOwCq_Eg4lY", "si6TDLjC9Ko", "F0t11rrVxM8", "hB_64KLkZ40"];
				aNames = ["El mensaje de los profetas menores. Introducción: ¿Cómo interpretar sus mensajes?", "El mensaje de Oseas I: Juicio y restauración Oseas 1:1-11", "El mensaje de Oseas II: Una profecía de juicio y restauración Oseas 2:1-3:1-5", "El mensaje de Oseas III: Juicio y restauración - Oseas 4:1-14; 6:1-3", "El mensaje de Oseas IV: Juicio y restauración 6:1-3;11:1-11", "El mensaje de Oseas V: Juicio y restauración Oseas 11:12-14:1-9", "El mensaje de Jonás I: Nadie puede escapar de los propósitos de Dios (1:1-17)", "El mensaje de Jonás II: Nadie puede escapar del tratamiento de Dios (Jon. 2:1-9)", "El mensaje de Jonás III: Nadie puede escapar del mensaje de Dios (Jon. 3)", "El mensaje de Jonás IV: Nadie puede escapar del escrutinio de Dios", "Nahúm I: La ira de Dios 1:1-14", "Nahúm II: La ira de Dios 1:14-2:1-3:1-19", "Joel I: El día de Jehová", "Joel II: El día de Jehová", "Joel III: El día de Jehová", "Joel IV: El día de Jehová", "El mensaje de los profetas menores: Abdías", "El mensaje de los profetas menores: Amós 1:1-2:1-16", "El mensaje de los profetas menores: Amós 3:1:15", "El mensaje de los profetas menores: Amós 4:1-13"]
				aImgs = ["https://i.ytimg.com/vi/r2RdzuNN4kA/hqdefault.jpg", "https://i.ytimg.com/vi/ylnkjEs0Npg/hqdefault.jpg?s…IhCGAFwAQ==&rs=AOn4CLDCT8xF_1KmE5haJtoCMKDOcYhsAA", "https://i.ytimg.com/vi/MTUYYiwzbis/hqdefault.jpg?s…IhCGAFwAQ==&rs=AOn4CLBYIn_Yuo3ns5sgck6kN1FmhaPIOg", "https://i.ytimg.com/vi/OV-Vfaxw_JY/hqdefault.jpg?s…IhCGAFwAQ==&rs=AOn4CLBirj9ezP6c8evcf_qLqlZZK60_Gw", "https://i.ytimg.com/vi/adHnsl3bejg/hqdefault.jpg?s…IhCGAFwAQ==&rs=AOn4CLDyUDhepsmxj4oNpm-jQJrZX0YRSA", "https://i.ytimg.com/vi/lhG8scDMdD0/hqdefault.jpg?s…IhCGAFwAQ==&rs=AOn4CLDZOaADUe0hyjksTnU_UT9-r1-asw", "https://i.ytimg.com/vi/ARJGar0k-Eo/hqdefault.jpg?s…IhCGAFwAQ==&rs=AOn4CLBVmpCqLeuTFeYvbQfXjhvmGWSWTQ", "https://i.ytimg.com/vi/U6hb_kytKPk/hqdefault.jpg?s…IhCGAFwAQ==&rs=AOn4CLB0Ow9VGTAXSdiDAcTGtQTCGFtpeg", "https://i.ytimg.com/vi/sEmuTPxUgh4/hqdefault.jpg?s…IhCGAFwAQ==&rs=AOn4CLD_auCnLGgLolFt2xkLfdYmBNIe3g", "https://i.ytimg.com/vi/fWp4S1AlKoQ/hqdefault.jpg?s…IhCGAFwAQ==&rs=AOn4CLCU5aWzk6ZI1si-uM3jiK6JLfCXDQ", "https://i.ytimg.com/vi/jPZ1IBDCmbo/hqdefault.jpg?s…QAAiEIYAXAB&rs=AOn4CLCj16Y_js3MAJz8o5JNqFzf3uPNDA", "https://i.ytimg.com/vi/5c0Lk9JoQlc/hqdefault.jpg?s…QAAiEIYAXAB&rs=AOn4CLDR3Xdz-qMnCueHKGhSYU2bC0sKow", "https://i.ytimg.com/vi/IRq3qQQ7QoU/hqdefault.jpg?s…QAAiEIYAXAB&rs=AOn4CLB-YNO8ZnUR3Jiozq7gZ5WJxkJTDg", "https://i.ytimg.com/vi/LJpJXFM0aGk/hqdefault.jpg?s…QAAiEIYAXAB&rs=AOn4CLAmKYKfV-N9Ss5jScG4MpJd3UD1LQ", "https://i.ytimg.com/vi/yd6HdNwpEww/hqdefault.jpg?s…QAAiEIYAXAB&rs=AOn4CLDQvygxwo1EenqyOafl6gp6-63-Kg", "https://i.ytimg.com/vi/_lusJYBTTmY/hqdefault.jpg?s…QAAiEIYAXAB&rs=AOn4CLBnO_6z1apBF7ERfBS56t3E1dg8tA", "https://i.ytimg.com/vi/TOwCq_Eg4lY/hqdefault.jpg?s…QAAiEIYAXAB&rs=AOn4CLCSypzvKmdD2RKec8f5tG9S6rMgrA", "https://i.ytimg.com/vi/si6TDLjC9Ko/hqdefault.jpg?s…QAAiEIYAXAB&rs=AOn4CLDyBKt-5gTC1WtCx6oA8AjKJCvFnA", "https://i.ytimg.com/vi/F0t11rrVxM8/hqdefault.jpg?s…QAAiEIYAXAB&rs=AOn4CLCagSEldq5TBSZCvgfcPvO5tD8eAw", "https://i.ytimg.com/vi/hB_64KLkZ40/hqdefault.jpg?s…QAAiEIYAXAB&rs=AOn4CLB8iu9BsYR_Q8-92-bNyjCtqaK9KQ"]
			}
			if(selected=="Escatología"){
				aYoutube=["ufn4N8OihT4", "3s0nSsUkJOs", "yK2qxrddcgo"];
				aNames=["Jornada escatológica I Él volverá: 'El arrebatamiento' Pr. Claudio Villarroel", "Jornada escatológica II - Él volverá: Los Pactos Bíblicos - Parte 2", "Jornada escatológica II - Él volverá: Los Pactos Bíblicos - Parte 1"]
				aImgs = ["https://i.ytimg.com/vi/ufn4N8OihT4/hqdefault.jpg?s…IhCGAFwAQ==&rs=AOn4CLBM0_LfkSj3dZ_wvOXKgugby1ycFg", "https://i.ytimg.com/vi/3s0nSsUkJOs/hqdefault.jpg?s…IhCGAFwAQ==&rs=AOn4CLA5vcivzavecAD7o87LaNPOgeLttA", "https://i.ytimg.com/vi/yK2qxrddcgo/hqdefault.jpg?s…IhCGAFwAQ==&rs=AOn4CLAe82Jecklz27KSMJvwR_O1qf6RGA"]
			}
			if(selected=="La cuestión del diezmo y las ofrendas"){
				aYoutube=["phEcgQ57fhA", "AKtSfZP0ikU", "_sm-GClpqDk", "x7lkdqChDlo"]
				aNames=["La cuestión del diezmo y las ofrendas en el Antiguo Testamento", "La cuestión del diezmo y las ofrendas en el Nuevo Testamento I", "La cuestión del diezmo y las ofrendas en el Nuevo Testamento II", "La cuestión del diezmo y las ofrendas"]
				aImgs =["https://i.ytimg.com/vi/phEcgQ57fhA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBimd_jZNdHhs2GpP6efurFuBAzhw","https://i.ytimg.com/vi/AKtSfZP0ikU/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLACZ2tmAibOmiJrq-hJgDwzsX1Vew","https://i.ytimg.com/vi/_sm-GClpqDk/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA6rF0m8_4wGMHLK3XNPIdneYzReg","https://i.ytimg.com/vi/x7lkdqChDlo/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB0hCMwsmgPijknymmnTUHhaqIaQA"]
			}
			document.getElementById("lista2").value=""
			return [aYoutube,aNames, aImgs]
		}

		//Esta función llama a getData() Para obtener las URL y los nombres de la lista de reproducción
		//Posteriormente, llama a la funcíon newLi() para crear el elemento de la lista correspondiente
		//A un determinado nombre y URL
		function idYoutube(){
			var tagUl = document.getElementById("lista")
			var child = tagUl.lastElementChild;  
	        while (child) { 
	            tagUl.removeChild(child); 
	            child = tagUl.lastElementChild; 
	        }

			aURL=[];aNombres=[];aImagen=[];
			[aURL, aNombres,aImagen] = getData();
			console.log(aURL)
			for (var i = 0;i<aURL.length; i++) {
				var url = "https://www.youtube.com/embed/"+aURL[i]
				newLi((i+1)+".- "+aNombres[i],url,aImagen[i])
			}
		}

		//Esta función refresca el reproductor de video
		function refresh(tag){
			var video = document.getElementById("video")
			tag = tag.replace("watch?v=","embed/")
			video.src=tag
			console.log(tag)
			
			/*var select = document.getElementById(tag.id)
			var url = select.attributes[0].textContent;
			console.log(url)*/		

			
	}