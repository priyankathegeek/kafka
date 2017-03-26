PROJECT=SendData
#CC= /usr/local/Cellar/gcc6/6.1.0/bin/g++-6
CC=${CXX}
CC+=-std=c++14
LIBS=/usr/local/lib
mmacosx_flag=-mmacosx-version-min=10.8

${PROJECT}_test: ${PROJECT}.o ${PROJECT}_test.o
	${CC} ${mmacosx_flag} ${CFLAGS} -Wall -o ${PROJECT} ${PROJECT}.o ${PROJECT}_test.o  -L${LIBS} /usr/local/lib/liblsl.dylib

${PROJECT}_test.o: ${PROJECT}_test.cpp
	${CC} -g3 -fno-omit-frame-pointer ${mmacosx_flag} ${CFLAGS} -Wall -c ${PROJECT}_test.cpp

${PROJECT}.o: ${PROJECT}.cpp
	${CC} -g3 -fno-omit-frame-pointer ${mmacosx_flag} ${CFLAGS}  -Wall -c ${PROJECT}.cpp

clean:
	rm -rf *.o


